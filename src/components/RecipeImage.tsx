import React from 'react';

/**
 * @description - This is the interface that describes the properties of a recipe image.
 * @param containerWidth - The width of the container. Defaults to w-full.
 * @param imageWidth - The width of the image. Defaults to w-full.
 * @param imageHeight - The height of the image. Defaults to h-full.
 */
interface ImageInterface {
  containerClass?: string;
  imageClass?: string;
  src?: string;
  alt?: string | undefined;
}

/**
 * @description - This is the interface that describes the properties of a recipe title.
 * @param e - The event
 */
const recipeImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = '/images/recipes/defaultrecipe.jpeg';
};

const RecipeImage = ({
  src = '/images/recipes/defaultrecipe.jpeg',
  alt = '',
  containerClass = 'w-full sm:w-2/3 h-52 bg-gray-100',
  imageClass = 'w-full h-full object-cover sm:object-contain',
}: ImageInterface) => {
  return (
    <div className={containerClass}>
      <img
        className={imageClass}
        src={src}
        alt={alt}
        onError={recipeImageError}
      />
    </div>
  );
};

export default RecipeImage;
