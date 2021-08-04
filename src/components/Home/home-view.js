import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { getCalls, getCall } from "../../api/apiCalls";
import Home from "./home";

const HomeView = () => {
    const [movie, setMovie] = useState(null)
    const formik = useFormik({
        initialValues: { title: ''},
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title required'),
        }),
        onSubmit: async (values) => {
            const { title } = values;
           const movieDetails =  await getCalls(title);
           setMovie(movieDetails)
        },
    });
  return (
    <div>
      <Home
          title={formik.values.title}
          onChange={formik.handleChange}
          onSubmit={formik.handleSubmit}
          onBlur={formik.handleBlur}
          errors={formik.errors}
          touched={formik.touched}
      />
        {movie?.Title &&(
            <>
                <div>Movie Title: {movie.Title}</div>
                <div>Released Year: {movie.Year}</div>
                <div>Movie Plot: {movie?.Plot}</div>
                {movie.Genre.split(',').map(item =>(
                    <div>Genre: {item}</div>
                ))}

            </>

        )}

        {movie?.Error &&(
            <div>{movie.Error}</div>
        )}


    </div>
  );
};

export default HomeView;
