import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {

  const {user} = useContext(AuthContext);
  console.log(user)


    const handleAddCraft = (event) => {
      event.preventDefault();
      const item_name = event.target.item_name.value;
      const photo = event.target.photo.value;
      const sub_category_name = event.target.sub_category_name.value; 
      const description = event.target.description.value; 
      const price = event.target.price.value;
      const rating = event.target.rating.value;
      const customization = event.target.customization.value; 
      const processing_time = event.target.processing_time.value; 
      const stock_status = event.target.stock_status.value;
      const user_name = event.target.user_name.value;
      const user_email = event.target.user_email.value;

      const craftItem = {item_name, photo, sub_category_name, description, price, rating, customization, processing_time, stock_status, user_name, user_email}
      console.log(craftItem)

      fetch("http://localhost:5001/crafts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(craftItem)
      })
      .then((res)=> res.json())
      .then(data=> {
        if(data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Wow!",
            text: "Added successfully",
            footer: "",
          });
        }
      })


    }

    return (
      <div className="bg-gray-300 rounded-lg mt-5">
        <form onSubmit={handleAddCraft} className="p-3">
          <div className="flex gap-5 justify-center ">
            <div className=" p-5 w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="text"
                  name="item_name"
                  placeholder="Item name"
                  className="p-5 rounded-md"
                  required
                />

                <label className="label">
                  <span className="label-text text-black">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="p-5 rounded-md"
                  required
                />

                <label className="label">
                  <span className="label-text text-black">
                    Sub-Category Name
                  </span>
                </label>
                <input
                  type="text"
                  name="sub_category_name"
                  placeholder="Sub-Category Name"
                  className=" p-5 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">
                    Short Description
                  </span>
                </label>
                <div className="relative">
                  <input
                    name="description"
                    placeholder="Short Description"
                    className="input text-black  w-full"
                  />
                  <div className="absolute right-3 top-4 text-xl"></div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="p-5 rounded-md"
                  required
                />

                <label className="label">
                  <span className="label-text text-black">Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="p-5 rounded-md"
                  required
                />
              </div>
              <div className="form-control"></div>
            </div>

            <div className=" p-5 w-1/2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Customization</span>
                </label>
                <input
                  type="text"
                  name="customization"
                  placeholder="Yes or No"
                  className=" p-5 rounded-md"
                  required
                />

                <label className="label">
                  <span className="label-text text-black">Processing Time</span>
                </label>
                <div className="relative">
                  <input
                    name="processing_time"
                    type="text"
                    placeholder="Processing Time"
                    className="input text-black input-bordered w-full"
                  />
                  <div className="absolute right-3 top-4 text-xl"></div>
                </div>

                <label className="label">
                  <span className="label-text text-black">Stock Status</span>
                </label>
                <div className="relative">
                  <input
                    name="stock_status"
                    type="text"
                    placeholder="Stock Status"
                    className="input text-black input-bordered w-full"
                  />
                  <div className="absolute right-3 top-4 text-xl"></div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">User Name</span>
                </label>
                <div className="relative">
                  <input
                    name="user_name"
                    type="text"
                    value={user.displayName}
                    placeholder="User Name"
                    className="input text-black input-bordered w-full"
                  />
                  <div className="absolute right-3 top-4 text-xl"></div>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">User Email</span>
                </label>
                <div className="relative">
                  <input
                    name="user_email"
                    type="email"
                    value={user.email}
                    placeholder="User Email"
                    className="input text-black input-bordered w-full"
                  />
                  <div className="absolute right-3 top-4 text-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <input
            className="btn btn-primary w-full font-bold text-xl"
            type="submit"
            value="Add This"
          />
        </form>
      </div>
    );
};

export default AddCraft;