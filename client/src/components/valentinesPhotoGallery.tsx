import { useState } from 'react'

const photos = [
    'src/assets/valentines/amelia1.jpg',
    'src/assets/valentines/amelia2.jpg',
    'src/assets/valentines/amelia3.jpg',
    'src/assets/valentines/amelia2.jpg',
    'src/assets/valentines/amelia2.jpg',
  ];
  
  const ValentinesPhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full mx-auto">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            onClick={() => setSelectedPhoto(photo)}
            className="w-full h-full object-cover rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          />
        ))}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
            onClick={() => setSelectedPhoto(null)}
          >
            <img
              src={selectedPhoto}
              alt="Selected Memory"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    );
  };
  
  export default ValentinesPhotoGallery;