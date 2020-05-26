import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";

import ErrorMessage from "../components/ErrorMessage";
import Intro from "../components/Intro";
import { ActivityContext } from "../data/ActivityProvider";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { errors, handleSubmit, register, reset, watch } = useForm();
  const { addActivity } = useContext(ActivityContext);

  const disableSelectedActivity = suitingActivity =>
    suitingActivity === watch("activity", "hiking");

  const onSubmit = data => {
    addActivity(data);
    toast.success("🎉 Treningsøkten er registrert!", {
      hideProgressBar: true
    });
    reset();
  };

  return (
    <>
      <Intro title="Treningsdagbok">
        <p>
          Med hjemmekontor og mye sitting i disse koronatider, er det fint å få
          vært litt mer aktiv. Men ingenting er ordentlig gøy før man får
          loggført det, right? Med denne treningsdagboken får du mulighet til
          akkurat dette.
        </p>
        <p>Så hva venter du på – registrer din treningsøkt nå!</p>
      </Intro>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="six columns">
            <label htmlFor="type">Treningsform</label>
            <select
              className="u-full-width"
              id="typeInput"
              name="type"
              ref={register({ required: true })}
            >
              <option value="hiking">Fottur</option>
              <option value="running">Løping</option>
              <option value="cycling">Sykling</option>
              <option value="skiing">Langrenn</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label htmlFor="description">Beskrivelse</label>
            <input
              className="u-full-width"
              type="text"
              placeholder="Rolig kveldstur"
              name="description"
              ref={register({
                required: "Du må gi en beskrivelse av aktiviteten"
              })}
            />
            <ErrorMessage errors={errors} name="description" />
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label htmlFor="duration">Varighet (i minutter)</label>
            <input
              className="u-full-width"
              name="duration"
              type="tel"
              placeholder="Antall minutter"
              ref={register({
                required: "Du må oppgi hvor lenge økten varte",
                pattern: {
                  value: /^[1-9][0-9]{0,2}$/,
                  message: "Varigheten må være mellom 1 og 999 minutter"
                }
              })}
            />
            <ErrorMessage errors={errors} name="duration" />
          </div>
        </div>

        <div className="row">
          <div className="six columns">
            <label htmlFor="location">Sted</label>
            <input
              className="u-full-width"
              name="location"
              type="text"
              placeholder="Sognsvann"
              ref={register({
                required: "Du må oppgi hvor du trente"
              })}
            />
            <ErrorMessage errors={errors} name="place" />
          </div>
        </div>

        <div className="row">
          <label htmlFor="beskrivelse">Er du fornøyd med økten?</label>
          <label className="radio-input">
            <input
              type="radio"
              name="satisfied"
              value="true"
              ref={register({
                required: "Du må oppgi om du er fornøyd med treningsøkten"
              })}
            />
            <span className="label-body">Ja</span>
            <input
              type="radio"
              name="satisfied"
              value="false"
              ref={register({
                required: "Du må oppgi om du er fornøyd med treningsøkten"
              })}
            />
            <span className="label-body">Nei</span>
          </label>
          <ErrorMessage errors={errors} name="satisfied" />
        </div>

        <div className="row">
          <label htmlFor="beskrivelse">Også godt egnet for:</label>
          <div className="checkbox-container">
            <label>
              <input
                type="checkbox"
                name="suitableActivities"
                value="hiking"
                disabled={disableSelectedActivity("hiking")}
                ref={register({ required: false })}
              />
              <span className="label-body">Fottur</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="suitableActivities"
                value="running"
                disabled={disableSelectedActivity("running")}
                ref={register({ required: false })}
              />
              <span className="label-body">Løping</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="suitableActivities"
                value="cycling"
                disabled={disableSelectedActivity("cycling")}
                ref={register({ required: false })}
              />
              <span className="label-body">Sykling</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="suitableActivities"
                value="skiing"
                disabled={disableSelectedActivity("skiing")}
                ref={register({ required: false })}
              />
              <span className="label-body">Langrenn</span>
            </label>
          </div>
          <ErrorMessage errors={errors} name="suitableActivities" />
        </div>

        <input
          className="button-primary"
          type="submit"
          value="Registrer økten"
        />
      </form>
      <ToastContainer />
    </>
  );
};

export default Home;
