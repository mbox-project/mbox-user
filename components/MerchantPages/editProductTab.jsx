import React from "react";
import { useState, useEffect } from "react";
import UploadImages from "../antd/UploadImages";
import {
    editProduct,
    getProductCategories,
} from "../../store/product/productService";
import { toastify } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";


export const ProductInformation = ({ setData, data, setActiveKey }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductCategories())
            .unwrap()
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        console.log("effect");
    }, []);
    const { categories } = useSelector((state) => state.product);
    const [category, setCategory] = useState("");
    const onSelectCategory = (e) => {
        setCategory(e.target.value);
        setData((init) => ({ ...init, categoryId: e.target.value }));
        console.log(e.target.value);
    };
    const handleChange = (e) => {
        setData((prev) => {
            const update = {
                ...prev,
                [e.target.name]: e.target.value,
            };
            return { ...update };
        });
        console.log(data);
    };
    const handleTagsChange = (e) => {
        setData((prev) => {
            const update = {
                ...prev,
                [e.target.name]: e.target.value.split(","),
            };
            return { ...update };
        });
        console.log(data);
    };
    return (
        <section className="card rectCard flex flex-col py-2 space-2">
            <div className="flex flex-col">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setActiveKey("2");
                    }}
                >
                    <div className="mb-2">
                        <label htmlFor="name" className="block mb-2 text-md text-gray-500">
                            Product Name <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="Product Name"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="unitprice"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Unit Price <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="unitprice"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="Enter product unit price"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="qty" className="block mb-2 text-md text-gray-500">
                            Product Qty <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="qty"
                            name="quantity"
                            value={data.quantity}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="e.g 10"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tags" className="block mb-2 text-md text-gray-500">
                            Category<span className="text-brightRed">*</span>
                        </label>
                        <select
                            name="category"
                            id="category"
                            value={category}
                            onChange={onSelectCategory}
                            placeholder="select category"
                            className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                        >
                            <option value="">select category</option>
                            {categories.map((e, i) => (
                                <option key={i} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="tags" className="block mb-2 text-md text-gray-500">
                            Product Tags<span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="text"
                            id="tags"
                            name="tags"
                            value={data?.tags?.$values?.join(', ')}
                            onChange={handleTagsChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="e.g clothes, shoes, belt"

                        />
                    </div>
                    <div className="mb-2 relative">
                        <label
                            htmlFor="discount"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Discount <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={data.discount}
                            onChange={handleChange}
                            className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                            placeholder="Enter product discount in percentage"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="desc" className="block mb-2 text-md text-gray-500">
                            Description
                        </label>
                        <textarea
                            id="desc"
                            rows="4"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            className="block p-4 w-full text-sm 
                  text-gray-900 bg-gray-50 rounded-md border border-gray-300"
                            placeholder="Write something about the product. "
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="p-3 bg-brightRed text-white text-center rounded-md w-full"
                    >
                        Next
                    </button>
                </form>
            </div>
        </section>
    );
};

export const ProductPicture = ({ setData, setActiveKey }) => {
    const [res, setRes] = useState([]);
    return (
        <section className="card rectCard flex flex-col py-2 space-2">
            <UploadImages setData={setRes} />
            <button
                onClick={() => {
                    if (setRes.length > 0) {
                        setData((prev) => {
                            return { ...prev, images: [...res] };
                        });
                        setActiveKey("3");
                    }
                }}
                type="submit"
                className="p-3 mt-2 bg-brightRed text-white text-center rounded-md w-full"
            >
                Next
            </button>
        </section>
    );
};

export const ProductPrice = ({ data, setData, setActiveKey }) => {
    const handleChange = (e) => {
        setData((prev) => {
            const update = {
                ...prev,
                [e.target.name]: e.target.value,
            };
            return { ...update };
        });
        console.log(data);
    };
    return (
        <section className="card flex flex-col py-2 space-2 rectCard">
            <div className="flex flex-col">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="mb-2">
                        <label
                            htmlFor="unitprice"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Unit Price <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="unitprice"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="Enter product unit price"
                            required
                        />
                    </div>
                    <div className="mb-2 relative">
                        <label
                            htmlFor="discount"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Discount <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="discount"
                            name="discount"
                            value={data.discount}
                            onChange={handleChange}
                            className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                            placeholder="Enter product discount in percentage"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="discount"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Quantity <span className="text-brightRed">*</span>
                        </label>
                        <input
                            type="number"
                            id="qty"
                            name="quantitiy"
                            value={data.quantity}
                            onChange={handleChange}
                            className="bg-gray-50 border text-gray-500 text-sm rounded-md block w-full p-2.5"
                            placeholder="Enter product discount"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-3 bg-brightRed text-white text-center rounded-md w-full"
                    >
                        Next
                    </button>
                </form>
            </div>
        </section>
    );
};

export const ProductVariation = ({
    data,
    setData,
    setActiveKey,
}) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const [colorsValue, setColorsValue] = useState(data.colors?.$values?.join(",") || "");
    const [sizesValue, setSizesValue] = useState(data.sizes?.$values?.join(",") || "");

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "colors") {
            setColorsValue(value);
        } else if (name === "sizes") {
            setSizesValue(value);
        }
        const newValue = value.split(",");
        setData((prev) => ({
            ...prev,
            [name]: { $id: prev[name].$id, $values: newValue },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await dispatch(editProduct(data)).unwrap();
            toastify.alertSuccess("Product updated successfully", 3000, () => {
                setLoading(false);
                router.push("/products");
            });
        } catch (error) {
            toastify.alertError(error.message, 3000);
            setLoading(false);
        }
    };

    return (
        <section className="card flex flex-col py-2 space-2 rectCard">
            <div className="flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label
                            htmlFor="colors"
                            className="block mb-2 text-md text-gray-500"
                        >
                            Available Colors <span className="text-brightRed">*</span>
                        </label>
                        <p className="text-brightRed text-xs mb-2">
                            (type all available colors separated by ",")
                        </p>

                        <input
                            type="text"
                            id="colors"
                            name="colors"
                            value={colorsValue}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="Select Colors"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="sizes" className="block mb-2 text-md text-gray-500">
                            Available Sizes
                        </label>
                        <p className="text-brightRed text-xs mb-2">
                            (type all available sizes separated by ",")
                        </p>
                        <input
                            type="text"
                            id="sizes"
                            name="sizes"
                            value={sizesValue}
                            onChange={handleChange}
                            className="bg-gray-50 border text-sm rounded-md block w-full p-2.5"
                            placeholder="small, medium, large"
                        />
                    </div>
                    <button
                        className="p-3 border border-brightRed text-center text-brightRed rounded-md w-full"
                        type="submit"
                    >
                        {loading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> : "Upload Products"}
                    </button>
                </form>
            </div>
        </section>
    );
};