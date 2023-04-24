export default function Contact({ setDisplayContact }) {
  return (
    <>
      <form action="">
        <button
          onClick={(event) => {
            event.preventDefault();
            setDisplayContact(false);
          }}
          className="xButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#0F1729"
              fillRule="evenodd"
              d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="inputCover">
          <input name="firstName" type="text" placeholder=" " required />
          <label htmlFor="firstName">
            First Name<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="inputCover">
          <input name="lastName" type="text" placeholder=" " required />
          <label htmlFor="lastName">
            Last Name<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="inputCover">
          <input name="email" type="email" placeholder=" " required />
          <label htmlFor="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="inputCover">
          <input name="number" type="tel" placeholder=" " required />
          <label htmlFor="email">
            Number<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <textarea
          placeholder="type your message here"
          name=""
          id=""
          cols="30"
          rows="10"
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </>
  );
}
