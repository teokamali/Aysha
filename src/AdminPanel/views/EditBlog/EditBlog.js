import {
  CButton,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
} from "@coreui/react";
import React, { useState, useContext } from "react";
import MultiImageInput from "react-multiple-image-input";
import { BlogContext } from "../../context/BlogContextProvider";
import CustomDropDown1 from "../../../components/CustomDropDown1/CustomDropDown1";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useParams } from "react-router-dom";
function EditBlog() {
  const { blog } = useContext(BlogContext);
  const { id } = useParams();
  const selectedBlog = blog.find((blog) => blog._id === id);
  const crop = {
    unit: "%",
    aspect: 16 / 9,
    width: "100",
  };

  const [formVal, setformVal] = useState({
    images: {},
    categorySelect: selectedBlog.tags.map((tag) => ({
      label: tag,
      value: tag,
    })),
    tagSelect: selectedBlog.tags.map((tag) => ({ label: tag, value: tag })),
    productName: selectedBlog.title,
    productPrice: selectedBlog.price,
    description: selectedBlog.description,
  });
  const submitHandler = (values) => {
    console.log(values);
    try {
      fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
  };
  // form Validate
  const Validate = Yup.object({
    productName: Yup.string().max(24, "نام بسیار طولانی است!"),
    description: Yup.string(),
  });
  return (
    <Formik
      validationSchema={Validate}
      initialValues={formVal}
      onSubmit={(e) => submitHandler(e)}
    >
      {(formik) => (
        <Form>
          {/* {console.log(formik.values)} */}
          <div className="container">
            {/* image Select */}
            <div className="row">
              <h5>انتخاب تصاویر</h5>
              <div className="col-12">
                <MultiImageInput
                  images={formik.values.images}
                  setImages={(images) =>
                    formik.setValues({ ...formik.values, images })
                  }
                  allowCrop={true}
                  max={1}
                  theme="light"
                  cropConfig={{ crop, ruleOfThirds: true }}
                />
              </div>
            </div>
            {/* name and price */}
            <div className="row">
              <div className="col-6">
                <CFormFloating className="mb-3">
                  <CFormInput
                    type="text"
                    id="productName"
                    value={formik.values.productName}
                    onChange={(e) => {
                      formik.setValues({
                        ...formik.values,
                        productName: e.target.value,
                      });
                    }}
                  />
                  <CFormLabel htmlFor="productName">نام بلاگ</CFormLabel>
                </CFormFloating>
              </div>
            </div>
            {/* category and tags */}
            <div className="row">
              <div className="col-6">
                <CustomDropDown1
                  data={blog.tags}
                  type="single"
                  name="category"
                  label="انتخاب دسته بندی"
                  value={formik.values.categorySelect}
                  onValueChange={(category) => {
                    formik.setValues({
                      ...formik.values,
                      categorySelect: category,
                    });
                  }}
                />
              </div>
              <div className="col-6">
                <CustomDropDown1
                  data={blog.tags}
                  type="multi"
                  name="category"
                  label="انتخاب برچسب"
                  value={formik.values.tagSelect}
                  onValueChange={(tags) => {
                    formik.setValues({ ...formik.values, tagSelect: tags });
                  }}
                />
              </div>
            </div>
            {/* Description */}
            <div className="row">
              <div className="col-12">
                <CFormFloating>
                  <CFormTextarea
                    id="floatingTextarea"
                    placeholder="Leave a comment here"
                    value={formik.values.description}
                    onChange={(e) => {
                      formik.setValues({
                        ...formik.values,
                        description: e.target.value,
                      });
                    }}
                  ></CFormTextarea>
                  <CFormLabel htmlFor="floatingTextarea">توضیحات</CFormLabel>
                </CFormFloating>
              </div>
            </div>
            {/* submit button */}
            <div className="row mt-3">
              <div className="col-2">
                <CButton type="submit" color="info">
                  بروزرسانی
                </CButton>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default EditBlog;
