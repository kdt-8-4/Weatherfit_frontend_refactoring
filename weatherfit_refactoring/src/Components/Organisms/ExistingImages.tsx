// import InputStore, { InputStyle } from '../Atoms/Input/InputStore'
// import { ChangeEvent, useCallback, useState } from 'react'
// import { useStore } from '../Atoms/Store'
// import ArrayImage from '../Molecules/ArrayImage'

// export default function ExistingImages() {
//       const [existingImages, setExistingImages] =
//         useState<Image[]>(initialImages)

//   const removeImage = (index: number, id: number) => {
//     // if (selectedImages) {
//     //   const newImages = [...selectedImages]
//     //   newImages.splice(index, 1)
//     //   setSelectedImages(newImages)
//     //   handleImagesSelected(newImages)
//       // }
//       if (existingImages) {
//         onDeleteImage(id) // 상위 컴포넌트에 삭제된 이미지의 URL 전달
//         const newImages = [...existingImages]
//         newImages.splice(index, 1)
//         setExistingImages(newImages)
//         onExistingImagesSelected?.(newImages)
//       }
//   }

//   return (
//     <>
//       {existingImages &&
//         Array.from(existingImages).map((image, index) => (
//           <ArrayImage
//             key={index}
//             index={index}
//             imageUrl={image.imageUrl}
//             removeImage={removeImage}
//           />
//         ))}
//     </>
//   )
// }
