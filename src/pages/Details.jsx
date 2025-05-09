import React, { useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const appData = data.find(app => app.id === id);

  const [isInstalled, setIsInstalled] = useState(false);
  const [reviews, setReviews] = useState(appData?.reviews || []);
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const handleInstallUninstall = () => {
    setIsInstalled(!isInstalled);
  };

  const handleSubmit = () => {
    if (reviewText.trim()) {
      const newReview = {
        text: reviewText,
        rating: rating,
      };
      setReviews([...reviews, newReview]);
      setReviewText('');
      setRating(4);
      toast.success("Review submitted successfully!");
    }
  };

  if (!appData) {
    return <p className="text-center text-red-500 mt-10">App not found!</p>;
  }

  return (
    <>
      <Helmet>
        <title>App Store || {appData.name}</title>
      </Helmet>

      <div className='max-w-7xl mx-auto mt-16 px-4'>
        <div className="p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow bg-white">
          <img
            src={appData.thumbnail}
            alt="App Thumbnail"
            className="w-40 h-40 rounded-xl object-cover"
          />
          <ToastContainer />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold">{appData.name}</h2>
            <p className="text-gray-600">{appData.developer}</p>
            <p className="text-sm text-gray-400">{appData.category}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <span className="text-orange-500 font-semibold">{appData.rating}</span>
                <FaStar className="text-yellow-400" />
                <span> Reviews</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaDownload />
                <h2>{appData.downloads}</h2>
              </div>
            </div>

            <button
              className={`mt-4 px-6 py-2 ${isInstalled ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full flex items-center gap-2 transition cursor-pointer`}
              onClick={handleInstallUninstall}
            >
              <FaDownload /> {isInstalled ? 'Uninstall' : 'Install'}
            </button>
          </div>
        </div>

        {isInstalled && (
          <div className="max-w-md mx-auto mt-10 p-6 bg-blue-50 rounded-2xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-2">Rate your experience</h2>
            <p className="text-gray-600 text-sm mb-4">
              We highly value your feedback! Kindly take a moment to rate your experience and provide us with your valuable feedback.
            </p>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      className="hidden"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className={`text-3xl cursor-pointer transition ${currentRating <= (hover || rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                        }`}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <textarea
              className="w-full h-24 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none mb-4"
              placeholder="Tell us about your experience!"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded-full"
            >
              Send
            </button>
          </div>
        )}

        <div className='mt-10 mb-6'>
          <h1 className='text-2xl font-medium mb-2'>About this app</h1>
          <div className='flex flex-wrap gap-2'>
            {appData.features.map((feature, index) => (
              <span key={index} className='bg-gray-200 px-3 py-1 rounded-full text-sm'>
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className='mb-6'>
          <img className='h-[450px] w-full object-cover rounded-2xl' src={appData.banner} alt="App Banner" />
        </div>

        <div className='mb-10'>
          <h1 className='text-2xl font-medium mb-2'>Description</h1>
          <p className='p-4 text-gray-700'>{appData.description}</p>
        </div>

        <div className='mb-10'>
          <h1 className='text-2xl font-medium mb-4'>User Reviews</h1>
          {reviews.length > 0 ? (
            <div>
              {reviews.map((review, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  <p className="text-sm text-gray-800 mb-1">{review.text}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, idx) => (
                      <FaStar key={idx} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">No reviews yet. Be the first to review!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
