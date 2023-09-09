// import { useEffect, useState } from "react";
import ButtonSend from "../UI/Button/button-send";
import Title from "../UI/Button/title-contact";
import FloatSvg from "./float-svg";

const Form = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  return (
    <div id="contact">
      <section
      //id="contact"
      >
        <div>
          <Title />
        </div>
        <div className="flex justify-center sm:flex-row md:flex-row lg:flex-row flex-col m-10 mt-12">
          <div className="w-96 h-3/6 mr-64 mb-20 sm:mb-10 sm:text-left md:text-left">
            <p className="font-extrabold text-2xl sm:text-4xl text-black w-80 sm:w-96 md:w-96 lg:w-96">
              Si vous recherchez une agence digitale qui peut donner vie à votre
              projet numérique, qui excelle dans le design et le développement
              web, ne cherchez pas plus loin.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="text-black text-lg sm:text-2xl w-80 sm:w-96 md:w-96 lg:w-96 mt-10"
            >
              {`Contactez-nous aujourd'hui pour discuter de
          votre projet et découvrir comment nous pouvons vous aider à briller
          sur le web. Votre succès numérique est notre mission.`}
            </p>
          </div>

          <div>
            <svg
              className="relative top-2 left-svg"
              width="138"
              height="140"
              viewBox="0 0 138 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.9375 0.5H69.1875C72.6875 21.6667 74.6875 33.3333 75.1875 35.5H75.4375C85.6458 16.9583 91.4792 6.70833 92.9375 4.75C88.9375 26.375 86.8542 38.0417 86.6875 39.75L113.688 16.75V17L95.9375 47.75H96.1875C113.229 41.25 124.229 37.1667 129.188 35.5L101.938 58.5H102.188C114.604 58.3333 124.938 58.25 133.188 58.25H137.438V58.5L104.438 70.25V70.75C104.812 70.75 115.812 74.6667 137.438 82.5V82.75H137.188C123.479 82.5833 112.729 82.5 104.938 82.5H101.938V82.75C105.062 85.0417 114.146 92.625 129.188 105.5H128.938C109.438 98.1667 98.4375 94.0833 95.9375 93.25L113.688 124H113.438C98.1042 110.833 89.1875 103.25 86.6875 101.25V101.5C86.8542 102.917 88.9375 114.5 92.9375 136.25C90.6875 132.833 84.8542 122.583 75.4375 105.5H74.9375V105.75C73.7708 113.375 71.8542 124.792 69.1875 140H68.9375C65.1042 118 63.1875 106.5 63.1875 105.5H62.6875C53.2708 122.583 47.4375 132.833 45.1875 136.25C49.1875 114.583 51.2708 102.917 51.4375 101.25C48.9375 103.25 40.0208 110.833 24.6875 124H24.4375L42.1875 93.25H41.9375C20.1875 101.417 9.1875 105.5 8.9375 105.5C23.9792 92.625 33.0625 85.0417 36.1875 82.75V82.5H33.1875C25.3958 82.5 14.6458 82.5833 0.9375 82.75H0.6875V82.5C22.3125 74.6667 33.3125 70.75 33.6875 70.75V70.25L0.6875 58.5V58.25H4.9375C12.3125 58.25 22.7292 58.3333 36.1875 58.5L8.9375 35.5H9.4375L42.1875 47.75C32.1042 30.3333 26.1875 20 24.4375 16.75L51.4375 39.75V39.5C50.1042 31.5417 48.0208 19.9583 45.1875 4.75C46.6458 6.70833 52.4792 16.9583 62.6875 35.5C63.1458 35.5 64.0625 30.5 65.4375 20.5C65.7708 19.6667 66.9375 13 68.9375 0.5Z"
                fill="#E18AB0"
              />
            </svg>
            <div className="flex flex-col mt-10 sm:mt-6">
              <div className="sm:w-w-f md:w-w-f">
                <div className="bg-contact relative bottom-10 sm:bottom-72 mb-20 rounded-rounded-form-56 p-10">
                  <form>
                    {/* <div className="flex space-x-2 sm:justify-center"> */}
                    <input
                      type="text"
                      placeholder="Prénom"
                      className="rounded-input-rounded-form-22 p-6 mr-1 outline-none input-bordered input-secondary bg-white w-full mt-10"
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-5"
                    />
                    {/* </div> */}
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                    />
                    <input
                      type="text"
                      placeholder="Numéro de téléphone"
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                    />
                    <input
                      type="text"
                      placeholder="Le meilleur moyen de vous contacter ?"
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                    />
                    <input
                      type="text"
                      placeholder="Le meilleur moment de vous contacter ?"
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full  mt-5"
                    />
                    <textarea
                      className="rounded-input-rounded-form-22 p-6 outline-none input-bordered input-secondary bg-white w-full mt-20"
                      placeholder="Votre message"
                      rows="5"
                    ></textarea>
                    <ButtonSend />
                  </form>
                </div>
              </div>
            </div>
            <div className="relative">
              <FloatSvg />
            </div>
            {/* <div
              style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -50%)",
              }}
            > */}
            {/* <svg
              className=""
              width="204"
              height="208"
              viewBox="0 0 204 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M102.235 0.1875H102.606C102.606 1.11523 104.462 18.1855 108.173 51.3984H108.544L124.872 2.78516H125.243V3.15625C121.532 36.3073 119.553 53.3776 119.306 54.3672H119.677C136.747 26.1641 145.777 11.5677 146.767 10.5781V10.9492C145.777 13.485 140.211 29.5658 130.067 59.1914L165.692 23.1953V23.5664C148.127 51.8932 139.345 66.2422 139.345 66.6133L181.649 39.5234H182.021C159.817 62.222 147.942 74.3444 146.396 75.8906H146.767C176.887 65.0052 192.597 59.4388 193.896 59.1914L151.591 86.6523H151.962C183.567 82.9414 199.771 81.0859 200.575 81.0859H201.317V81.457L154.188 97.7852V98.1562C174.228 100.63 190.803 102.486 203.915 103.723C203.915 104.403 199.462 105.021 190.556 105.578C182.268 106.815 170.269 108.176 154.56 109.66V110.402L201.688 126.73V127.102H200.946L151.962 121.535H151.591V121.906C174.537 136.193 188.638 145.223 193.896 148.996H193.524C162.6 137.863 146.89 132.297 146.396 132.297C154.312 140.214 166.187 152.336 182.021 168.664H181.649L139.345 141.574V141.945L166.063 184.992V185.363L130.067 148.996V149.367C130.81 151.099 136.376 167.18 146.767 197.609L119.306 153.82C120.048 159.077 122.027 176.148 125.243 205.031V205.402H124.872L108.544 156.789H108.173C104.462 190.002 102.606 207.072 102.606 208H102.235C102.235 207.072 100.38 190.002 96.6689 156.789H96.2979L79.9697 205.402H79.5986V205.031C82.8148 176.148 84.7939 159.077 85.5361 153.82H85.165C68.7751 180.848 59.7451 195.445 58.0752 197.609V197.238L74.7744 148.996L38.7783 185.363V184.992L65.4971 141.945V141.574L23.1924 168.664H22.8213C38.6546 152.336 50.5296 140.214 58.4463 132.297H57.7041C43.6644 137.492 28.0785 143.059 10.9463 148.996C16.2035 145.223 30.305 136.193 53.251 121.906V121.535H52.8799L3.52441 127.102H3.15332V126.73L50.2822 110.402V109.66H49.9111C21.708 106.691 5.37988 104.836 0.926758 104.094V103.723C14.0387 102.486 30.6143 100.63 50.6533 98.1562V97.7852L3.52441 81.457V81.0859H4.6377L53.251 86.6523L10.9463 59.1914H11.3174L58.4463 75.8906C56.9001 74.3444 45.0251 62.222 22.8213 39.5234H23.1924L65.4971 66.6133V66.2422C47.932 37.9772 39.1494 23.6283 39.1494 23.1953L74.7744 59.1914V58.8203C73.7848 56.3464 68.2184 40.2656 58.0752 10.5781C59.0648 11.5677 68.0947 26.1641 85.165 54.3672H85.5361C85.2887 53.3776 83.3096 36.3073 79.5986 3.15625V2.78516H79.9697L96.2979 51.3984H96.6689C100.38 18.1855 102.235 1.11523 102.235 0.1875ZM102.235 36.1836C101.555 49.2956 100.194 55.8516 98.1533 55.8516C97.7204 56.099 97.2256 56.2227 96.6689 56.2227C94.0713 56.2227 92.2158 53.2539 91.1025 47.3164C90.6696 47.3164 89.68 44.4714 88.1338 38.7812H87.7627V39.8945C88.7523 47.7493 89.2471 53.0684 89.2471 55.8516C88.5667 57.8307 87.3298 58.8203 85.5361 58.8203C83.3714 58.8203 81.0212 56.099 78.4854 50.6562L73.29 42.8633C77.001 52.6973 78.8564 58.2637 78.8564 59.5625V59.9336C78.5472 62.4076 77.3102 63.6445 75.1455 63.6445H74.7744C73.29 63.6445 70.6924 61.418 66.9814 56.9648L61.0439 51.3984C66.9814 60.6758 69.9502 65.8711 69.9502 66.9844V67.3555C69.641 69.8294 68.404 71.0664 66.2393 71.0664C65.126 71.0664 60.0544 68.0977 51.0244 62.1602V62.5312C58.9411 70.2624 62.8994 74.7155 62.8994 75.8906V76.2617C62.5902 78.7357 61.3532 79.9727 59.1885 79.9727H58.8174C57.8896 79.9727 52.5706 78.2409 42.8604 74.7773C52.0758 80.7767 57.0238 84.2402 57.7041 85.168L58.0752 87.0234C57.333 89.4974 56.096 90.7344 54.3643 90.7344C53.5602 90.7344 47.9938 90.1159 37.665 88.8789H37.2939V89.25C49.1689 92.7754 55.1064 95.2493 55.1064 96.6719C55.3538 97.1048 55.4775 97.5996 55.4775 98.1562C55.4775 101.125 52.3851 102.609 46.2002 102.609C42.3037 103.352 38.9639 103.723 36.1807 103.723V104.094C48.5505 105.393 54.7354 106.506 54.7354 107.434L55.4775 110.031C55.4775 112.505 51.7666 114.608 44.3447 116.34C44.3447 116.711 41.9945 117.577 37.2939 118.938V119.309H37.665C47.0042 118.072 52.6943 117.453 54.7354 117.453C56.529 117.453 57.6423 118.69 58.0752 121.164C58.0752 123.329 54.488 126.298 47.3135 130.07C43.8499 132.359 42.1182 133.596 42.1182 133.781C52.5706 129.823 58.3844 127.844 59.5596 127.844C61.7861 128.648 62.8994 130.008 62.8994 131.926C62.8994 133.658 60.0544 136.997 54.3643 141.945L50.2822 146.398C59.6833 140.214 65.0023 137.121 66.2393 137.121H66.9814C68.9606 137.801 69.9502 139.038 69.9502 140.832V141.203C69.9502 142.193 66.9814 147.388 61.0439 156.789H61.415C68.7132 148.625 73.0426 144.543 74.4033 144.543H75.1455C77.6195 144.852 78.8564 146.089 78.8564 148.254V148.625C78.8564 149.429 77.1247 154.748 73.6611 164.582C74.2796 164.025 77.3721 159.201 82.9385 150.109L85.5361 149.367C88.0101 149.676 89.2471 150.913 89.2471 153.078L87.7627 169.035V169.406H88.1338C91.2881 158.026 93.6383 152.336 95.1846 152.336C95.6175 152.089 96.1123 151.965 96.6689 151.965C99.6377 151.965 101.122 155.428 101.122 162.355C101.431 162.355 101.802 165.572 102.235 172.004H102.606C103.349 158.892 104.586 152.336 106.317 152.336L108.173 151.965C110.709 151.965 112.564 154.81 113.739 160.5C114.049 160.5 115.038 163.469 116.708 169.406H117.079V168.664C116.09 160.376 115.595 154.934 115.595 152.336C116.275 150.357 117.512 149.367 119.306 149.367C121.532 149.367 124.254 152.707 127.47 159.387C127.965 159.387 129.078 161.242 130.81 164.953H131.181V164.582C127.717 154.934 125.985 149.615 125.985 148.625V147.883C125.985 145.656 127.099 144.543 129.325 144.543H130.067C131.675 144.543 135.139 147.635 140.458 153.82L143.798 156.789C137.86 147.45 134.892 142.255 134.892 141.203V140.832C135.201 138.358 136.438 137.121 138.603 137.121C139.901 137.121 144.973 140.09 153.817 146.027H154.188C146.024 137.863 141.942 133.41 141.942 132.668V131.555C142.252 129.081 143.489 127.844 145.653 127.844C146.519 127.844 152.209 129.823 162.724 133.781V133.41C152.086 127.225 146.767 123.391 146.767 121.906V121.164C146.767 119.185 148.127 117.948 150.849 117.453C152.209 117.453 157.652 118.072 167.177 119.309H167.548V118.938C155.673 115.288 149.735 112.814 149.735 111.516L149.364 109.66C149.364 106.691 153.446 105.207 161.61 105.207C161.61 105.021 163.961 104.65 168.661 104.094V103.723C156.291 102.98 150.106 101.867 150.106 100.383C149.612 99.5788 149.364 98.8366 149.364 98.1562C149.364 95.5586 152.951 93.4557 160.126 91.8477C164.022 90.1159 166.496 89.25 167.548 89.25V88.8789H167.177C156.848 90.1159 151.158 90.7344 150.106 90.7344C147.88 89.9303 146.767 88.5697 146.767 86.6523C146.767 84.7969 150.478 81.8281 157.899 77.7461C160.621 75.9525 161.981 74.9629 161.981 74.7773H161.61C152.209 78.2409 147.261 79.9727 146.767 79.9727H145.653C143.179 79.6634 141.942 78.4264 141.942 76.2617C141.942 74.5299 144.787 71.1901 150.478 66.2422C150.478 65.7474 151.715 64.263 154.188 61.7891H153.817C145.159 67.974 140.087 71.0664 138.603 71.0664C136.129 70.7572 134.892 69.5202 134.892 67.3555C134.892 65.8092 136.994 61.8509 141.2 55.4805L143.798 51.3984H143.427C135.881 59.5625 131.428 63.6445 130.067 63.6445H129.696C127.222 63.3353 125.985 62.0983 125.985 59.9336V59.5625C125.985 58.5111 127.717 53.1921 131.181 43.6055V43.2344H130.81C125.181 53.625 121.594 58.8203 120.048 58.8203H119.306C116.832 58.5111 115.595 57.2741 115.595 55.1094C115.595 53.4395 116.09 48.1204 117.079 39.1523V38.7812H116.708C113.43 50.1615 111.08 55.8516 109.657 55.8516C109.224 56.099 108.729 56.2227 108.173 56.2227C105.204 56.2227 103.596 52.7591 103.349 45.832C103.349 45.0898 103.101 41.8737 102.606 36.1836H102.235ZM2.78223 80.7148H3.52441V81.0859H2.78223V80.7148ZM201.317 80.7148H202.06V81.0859H201.317V80.7148Z"
                fill="#E18AB0"
              />
            </svg> */}
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Form;
