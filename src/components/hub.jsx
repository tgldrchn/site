import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Hub = () => {
  return (
    <div className='hub d-flex flex-row justify-content-center align-items-center w-100 overflow-hidden'>
      <div className='miniHubContainer'>
        <div className='hubTitle'>Your Hub for teamwork</div>
        <div className='hubText'>
          Give everyone you work with—inside and outside your company—a more
          productive way to stay in sync. Respond faster with emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place.
        </div>
      </div>
      <div className='imgHubContainer'>
        <div className='attach w-25 rounded-2'>
          <div className='attachTime'>11:00AM - 11:30AM</div>
          <div className='attachText'>Website for the Products</div>
          <div className='attachButtons'>
            <Button style={{ width: "24px", height: "24px" }}></Button>
            <Button style={{ width: "24px", height: "24px" }}></Button>
            <Button style={{ width: "24px", height: "24px" }}></Button>
          </div>
        </div>
        <img
          src='https://s3-alpha-sig.figma.com/img/6fb8/1a3b/5e68005b7f9de2809e692de01f802b3f?Expires=1668384000&Signature=S7laXp7bRXRr~J6982ISKFuxFXW7U-sQlXpwEwIUTZsdIxLkQdRc9Ir~kf~kkCqaKfvki9Z6TpDfH2ZdiS3QjdUqsYDJA7~DZZSRFHiLbbQoSdJoBIO1tcM8smLxTi-jrZ5-yiIgEgWaCZsBGqdITe5EEgLWTIws8rfPC30pniX~RfEe0dt~j-PmYSaIf68NSIUMxOnkR4nFqi4ZNBFqj9TDGzWidC~ocJ-lIoCWu69YQnNrUY3c51RoUZOxz1F7ZFy0LTv4MfE~EU5IksK9GcGSJkIphdopJg5ksYBLkNf3jR2Yp6oNgh6btccORCR7ph~eG8g9hx~utj1PpiSojg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          alt=''
        />
      </div>
    </div>
  );
};
export default Hub;
