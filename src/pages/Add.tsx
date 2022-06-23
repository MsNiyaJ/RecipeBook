import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import TextArea from '../components/TextArea';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import Modal from '../components/Modal';
import '../global.css';

import { AddRecipe } from '../services/HTTPLibrary';
import { RecipeType } from '../types/types';

const Add = () => {
  const [open, setOpen] = useState(false); // Used to open the modal
  const [error, setError] = useState(false); // Used to show an error message if a recipe can not be added
  const initialState = {
    id: '',
    title: '',
    link: '',
    img: '/images/recipes/defaultrecipe.jpeg',
    description: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    ingredients: '',
    instructions: '',
  };

  const [formData, setFormData] = useState<RecipeType>({ ...initialState });

  /**
   * @description Creates a new image url and updates the formData
   * @param {Event} e
   */
  const imageUpload = (e) => {
    const reader = new FileReader();

    // Read the image
    if (e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }

    // Store uploaded image in formData
    const imageUrl = URL.createObjectURL(e.target.files[0]);

    // Update the formData
    const newFormData = {
      ...formData,
      img: imageUrl,
    };

    setFormData(newFormData);
  };

  /**
   * @description Formats the formData to be sent to the database
   * @param {Element[]} elements - The elements in the form
   */
  const formatData = (elements) => {
    let info = formData;

    // Loop through all elements in the form
    for (var i = 0; i < elements.length; i++) {
      // Get the element
      var item = elements.item(i);

      // If the element has a name attribute, update the form data with the value
      if (item.name) {
        let itemValue = item.value.trim();

        // Set default values for empty fields
        if (item.value === '' && item.name === 'description') {
          itemValue = 'No description provided';
        } else if (item.value === '') {
          itemValue = 'N/A';
        }

        info[item.name] = itemValue;
      }
    }

    // Update the form data
    setFormData(info);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    formatData(elements);

    // Send the form data to the database
    AddRecipe(formData).then((data) => {
      data.error ? setError(true) : setError(false);
      setOpen(true);
    });
  };

  /**
   * @description Updates form data when the user changes the value of an input
   */
  const onChange = (e) => {
    // Get the name and value of an input
    const { name, value } = e.target;

    // Update the value of the input in the formData
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white pt-14 md:pt-28">
      {open && (
        <Modal
          className="flex flex-col justify-center items-center text-center"
          title={
            error
              ? 'OOPS! Something went wrong!'
              : 'Your Recipe Has Been Added!'
          }
          message={
            <div>
              {error
                ? 'Can not add a recipe at this time. Please try again later.'
                : 'Go back to the recipes list and search for your new recipe!'}
              <BackButton
                containerClassName="flex justify-center pt-5"
                buttonClassName="flex items-center gap-2 bg-red-500 p-2 rounded-md text-white"
                buttonText="Back to Recipes"
              />
            </div>
          }
        />
      )}
      <form onSubmit={handleSubmit}>
        <Navbar
          leftContent={<BackButton buttonText="Recipes" />}
          centerContent="Add a Recipe"
          rightContent={
            <button
              data-testid="save-recipe-button"
              type="submit"
              className="border rounded-md flex items-center p-2 gap-2 text-xs md:text-lg hover:bg-white hover:text-black"
            >
              Save
            </button>
          }
        />
        <div className="container mx-auto p-10 pb-20">
          <div className="flex flex-col-reverse md:flex-row gap-10">
            <div className="w-full">
              <TextInput
                name="title"
                label="Title"
                required={true}
                subText=" (100 characters)"
                max={100}
                value={formData.title}
                onChange={onChange}
              />
              <TextInput
                name={'link'}
                label={'URL'}
                value={formData.link}
                onChange={onChange}
              />
            </div>
            {/* Image */}
            <div className="flex flex-col items-center gap-2 ">
              <div className="h-52 w-72">
                <img
                  src={formData.img}
                  // if the image fails to load, replace it with the default image
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    e.currentTarget.src = '/images/recipes/defaultrecipe.jpeg';
                  }}
                  alt={formData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                className="border-2 py-2 px-4 rounded-md hover:bg-red-600 hover:text-white relative"
              >
                Select Image
                <input
                  className="absolute top-0 left-0 w-full h-full opacity-0"
                  type="file"
                  id="image_input"
                  accept="image/png, image/jpg"
                  onChange={imageUpload}
                ></input>
              </button>
            </div>
          </div>
          <TextArea
            name={'description'}
            label={'Description'}
            subText=" (280 characters)"
            max={280}
            value={formData.description}
            onChange={onChange}
          />
          <div className="my-8 flex flex-col md:flex-row justify-around gap-2">
            <div className="w-full md:w-1/3">
              <TextInput
                name={'prepTime'}
                label={'Prep Time'}
                subText=" (e.g. 1hr 5mins)"
                max={100}
                value={formData.prepTime}
                onChange={onChange}
              />
            </div>
            <div className="w-full md:w-1/3">
              <TextInput
                name={'cookTime'}
                label={'Cook Time'}
                max={100}
                value={formData.cookTime}
                onChange={onChange}
              />
            </div>
            <div className="w-full md:w-1/3">
              <TextInput
                name={'servings'}
                label={'Servings'}
                max={100}
                value={formData.servings}
                onChange={onChange}
              />
            </div>
          </div>
          <TextArea
            name={'ingredients'}
            label={'Ingredients'}
            required={true}
            value={formData.ingredients}
            onChange={onChange}
          />
          <TextArea
            name={'instructions'}
            label={'Instructions'}
            required={true}
            value={formData.instructions}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
