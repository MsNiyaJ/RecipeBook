import React from 'react';
import './App.css';
import ChevronLeft from './icons/ChevronLeft';
import LinkButton from './LinkButton';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Navbar from './Navbar';

const Add = () => {
  const initialState = {
    title: '',
    link: 'N/A',
    img: '/defaultrecipe.jpeg',
    description: 'No description provided',
    prepTime: 'N/A',
    cookTime: 'N/A',
    servings: 'N/A',
    ingredients: '',
    directions: '',
  };

  let formData = initialState;

  const imageUpload = (e) => {
    const reader = new FileReader();
    const displayImage = document.querySelector('#display_image');

    // Display the uploaded image
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      displayImage.style.backgroundImage = `url(${uploaded_image})`;
    });

    // Read the image
    if (e.target.files.length > 0) {
      reader.readAsDataURL(e.target.files[0]);
    }

    // Store uploaded image in formData
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    formData.img = imageUrl;
  };

  const setFormData = (elements) => {
    let info = formData;

    // Loop through all elements in the form
    for (var i = 0; i < elements.length; i++) {
      // Get the element
      var item = elements.item(i);

      // If the element has a name and a value, update the form data
      if (item.name && item.value) {
        info[item.name] = item.value.trim();
      }
    }
    formData = info;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    setFormData(elements);

    await fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
      }),
    });
  };

  return (
    <div className="bg-white">
      <form action="" onSubmit={handleSubmit}>
        <Navbar
          leftContent={
            <LinkButton
              link={'/'}
              buttonStyle="flex gap-2"
              buttonContent={
                <div className="flex items-center gap-2">
                  <ChevronLeft />{' '}
                  <span className="hidden md:block">Recipes</span>
                </div>
              }
            />
          }
          centerContent="Add a Recipe"
          rightContent={
            <button
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
              />
              <TextInput name={'link'} label={'URL'} />
            </div>
            {/* Image */}
            <div className="flex flex-col items-center gap-2 ">
              <div
                id="display_image"
                className="w-40 h-40 border-2 bg-center bg-cover bg-defaultrecipe"
              ></div>
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
          />
          <div className="my-8 flex flex-col md:flex-row justify-around gap-2">
            <div className="w-full md:w-1/3">
              <TextInput
                name={'prepTime'}
                label={'Prep Time'}
                subText=" (e.g. 1hr 5mins)"
                max={100}
              />
            </div>
            <div className="w-full md:w-1/3">
              <TextInput name={'cookTime'} label={'Cook Time'} max={100} />
            </div>
            <div className="w-full md:w-1/3">
              <TextInput name={'servings'} label={'Servings'} max={100} />
            </div>
          </div>
          <TextArea
            name={'ingredients'}
            label={'Ingredients'}
            required={true}
          />
          <TextArea name={'directions'} label={'Directions'} required={true} />
        </div>
      </form>
    </div>
  );
};

export default Add;
