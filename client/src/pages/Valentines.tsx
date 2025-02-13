import ValentinesPhotoGallery from '../components/valentinesPhotoGallery'

function Valentines() {
  return (
    <div className="bg-pink-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
            Happy Valentine's Day!
        </h1>
        <ValentinesPhotoGallery />
    </div>
  )
}
        
export {
    Valentines
}
