import uniqid from 'uniqid';
import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';
import { assets } from '../../assets/assets';

const AddCourse = () => {
  const quillRef = useRef(null);
  const editorRef = useRef(null);

  const [courseTitle, setCourseTitle] = useState('');
  const [coursePrice, setCoursePrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [image, setImage] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentChapterId, setCurrentChapterId] = useState(null);
  const [lectureDetails, setLectureDetails] = useState({
    lectureTitle: '',
    lectureDuration: '',
    lectureUrl: '',
    isPreviewFree: false,
  });

  const handleChapter = (action, chapterId, lectureIndex = null) => {
    if (action === 'add') {
      const title = prompt('Enter Chapter Name:');
      if (title) {
        const newChapter = {
          chapterId: uniqid(),
          chapterTitle: title,
          chapterContent: [],
          collapsed: false,
          chapterOrder: chapters.length > 0 ? chapters.at(-1).chapterOrder + 1 : 1,
        };
        setChapters([...chapters, newChapter]);
      }
    } else if (action === 'remove') {
      setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId));
    } else if (action === 'toggle') {
      setChapters(chapters.map((chapter) =>
        chapter.chapterId === chapterId ? { ...chapter, collapsed: !chapter.collapsed } : chapter
      ));
    } else if (action === 'remove-lecture') {
      setChapters(
        chapters.map((chapter) => {
          if (chapter.chapterId === chapterId) {
            const updatedContent = [...chapter.chapterContent];
            updatedContent.splice(lectureIndex, 1);
            return { ...chapter, chapterContent: updatedContent };
          }
          return chapter;
        })
      );
    }
  };

  const handleLectureAdd = () => {
    setChapters(
      chapters.map((chapter) => {
        if (chapter.chapterId === currentChapterId) {
          return {
            ...chapter,
            chapterContent: [...chapter.chapterContent, lectureDetails],
          };
        }
        return chapter;
      })
    );
    setLectureDetails({
      lectureTitle: '',
      lectureDuration: '',
      lectureUrl: '',
      isPreviewFree: false,
    });
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle backend submission here
    console.log({ courseTitle, coursePrice, discount, chapters, image });
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <div className="h-screen overflow-auto p-4 md:p-8 bg-gray-50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl w-full text-gray-700">
        <div>
          <label className="block mb-1 font-medium">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Type title"
            className="w-full border border-gray-300 rounded px-3 py-2 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Course Description</label>
          <div ref={editorRef} className="bg-white rounded border border-gray-300 p-2 min-h-[150px]" />
        </div>

        <div className="flex flex-wrap items-end gap-6">
          <div>
            <label className="block mb-1 font-medium">Course Price</label>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(Number(e.target.value))}
              className="w-32 border border-gray-300 rounded px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Discount %</label>
            <input
              type="number"
              value={discount}
              min={0}
              max={100}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="w-32 border border-gray-300 rounded px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Thumbnail</label>
            <label htmlFor="thumbnailImage" className="flex items-center gap-3 cursor-pointer">
              <img src={assets.file_upload_icon} alt="upload" className="p-2 bg-blue-500 rounded" />
              <input
                type="file"
                id="thumbnailImage"
                onChange={(e) => setImage(e.target.files[0])}
                accept="image/*"
                hidden
              />
              {image && <img src={URL.createObjectURL(image)} alt="preview" className="h-10 rounded" />}
            </label>
          </div>
        </div>

        <div className="mt-4">
          {chapters.map((chapter, index) => (
            <div key={chapter.chapterId} className="border bg-white rounded-lg mb-4 shadow-sm">
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <div className="flex items-center gap-2">
                  <img
                    src={assets.dropdown_icon}
                    className={`w-4 transition-transform cursor-pointer ${chapter.collapsed ? '-rotate-90' : ''}`}
                    onClick={() => handleChapter('toggle', chapter.chapterId)}
                  />
                  <span className="font-semibold">{index + 1}. {chapter.chapterTitle}</span>
                </div>
                <span className="text-gray-500">{chapter.chapterContent.length} Lectures</span>
                <img
                  src={assets.cross_icon}
                  className="w-4 cursor-pointer"
                  onClick={() => handleChapter('remove', chapter.chapterId)}
                />
              </div>

              {!chapter.collapsed && (
                <div className="px-4 py-2">
                  {chapter.chapterContent.map((lecture, i) => (
                    <div key={i} className="flex justify-between items-center mb-2">
                      <span>
                        {i + 1}. {lecture.lectureTitle} - {lecture.lectureDuration} min -
                        <a href={lecture.lectureUrl} className="text-blue-500 ml-1" target="_blank" rel="noopener noreferrer">Link</a> -
                        {lecture.isPreviewFree ? ' Free' : ' Paid'}
                      </span>
                      <img
                        src={assets.cross_icon}
                        className="w-4 cursor-pointer"
                        onClick={() => handleChapter('remove-lecture', chapter.chapterId, i)}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentChapterId(chapter.chapterId);
                      setShowPopup(true);
                    }}
                    className="mt-2 text-blue-600 hover:underline text-sm"
                  >
                    + Add Lecture
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleChapter('add')}
            className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md text-blue-600"
          >
            + Add Chapter
          </button>
        </div>

        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded p-6 w-full max-w-sm relative shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Add Lecture</h2>

              {['lectureTitle', 'lectureDuration', 'lectureUrl'].map((field, i) => (
                <div className="mb-3" key={i}>
                  <label className="block mb-1 capitalize">{field.replace('lecture', 'Lecture ')}</label>
                  <input
                    type="text"
                    value={lectureDetails[field]}
                    onChange={(e) => setLectureDetails({ ...lectureDetails, [field]: e.target.value })}
                    className="w-full border border-gray-300 rounded px-2 py-1 outline-none"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={lectureDetails.isPreviewFree}
                    onChange={(e) => setLectureDetails({ ...lectureDetails, isPreviewFree: e.target.checked })}
                  />
                  <span>Free Preview</span>
                </label>
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                type="button"
                onClick={handleLectureAdd}
              >
                Add Lecture
              </button>

              <img
                src={assets.cross_icon}
                className="absolute top-3 right-3 w-4 cursor-pointer"
                onClick={() => setShowPopup(false)}
                alt="Close"
              />
            </div>
          </div>
        )}

        <button onClick={AddCourse} type="submit" className="bg-black text-white py-2.5 px-8 rounded mt-6">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
