function Gallery() {
  const galleryImages = [
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image",
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image",
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image",
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image",
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image",
    "https://placehold.co/600x400/3b82f6/ffffff?text=Placeholder+Image"
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 accent-line text-center">
        Gallery & Final Demo
      </h1>

      {/* Final Demo Video Section */}
      <div className="glass-card rounded-lg p-6 mb-8 hover-lift">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Final Demo Video
        </h2>
        <p className="text-gray-700 mb-6">
          Watch our complete system in action, demonstrating all key features and functionality.
        </p>
        
        {/* Video Container with 16:9 aspect ratio */}
        <div className="aspect-video bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          <div className="text-center">
            <svg 
              className="mx-auto h-24 w-24 text-gray-600 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <p className="text-gray-500 text-lg">
              Video Placeholder - Replace with embedded YouTube or Vimeo video
            </p>
            <p className="text-gray-600 text-sm mt-2">
              (Use an iframe or video player component)
            </p>
          </div>
        </div>

        {/* Example of how to embed a real video */}
        <div className="mt-4 bg-white/20 rounded-md p-4">
          <p className="text-sm text-gray-600">
            <strong>To embed a YouTube video:</strong> Replace the placeholder above with:
          </p>
          <code className="block mt-2 text-xs bg-white text-gray-100 p-3 rounded overflow-x-auto">
            {`<iframe 
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Final Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>`}
          </code>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="glass-card rounded-lg p-6 hover-lift">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Photo Gallery
        </h2>
        <p className="text-gray-700 mb-6">
          A collection of photos documenting the build process, testing, and final assembly.
        </p>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((imageUrl, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md border-2 border-gray-300 hover:border-blue-600 transition-all transform hover:scale-105">
              <img 
                src={imageUrl} 
                alt={`Gallery photo ${index + 1}`} 
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Gallery Notes */}
        <div className="mt-6 bg-white/20 rounded-md p-4">
          <p className="text-sm text-gray-600">
            <strong>Note:</strong> Replace these placeholder images with actual photos from your project. 
            You can store images in the <code className="bg-white px-1 rounded">public</code> folder 
            and reference them as <code className="bg-white px-1 rounded">/images/photo1.jpg</code>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery

