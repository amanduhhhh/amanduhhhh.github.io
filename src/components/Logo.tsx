import "./Logo.scss";
import SolidLogo from "../assets/images/logo.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import { DrawSVGPlugin } from "gsap-trial/all";
const Logo = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const outlineLogoRef = useRef<SVGPathElement>(null);
  const solidLogoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      });
    // gsap.fromTo(
    //   solidLogoRef.current,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 4,
    //     duration: 4,
    //   }
    // );
  });
  return (
    <div className="logo-container" ref={bgRef}>
      <img
        ref={solidLogoRef}
        className="solid-logo"
        src={SolidLogo}
        alt="Logo"
      />

      <svg
        fill="none"
        className="svg-container"
        width="500"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="500"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="5cbba5cc33">
            <path
              d="M 18.722656 18.851562 L 356.222656 18.851562 L 356.222656 112.601562 L 18.722656 112.601562 Z M 18.722656 18.851562 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="a775b688ea">
            <path
              d="M 18.722656 249.101562 L 356.222656 249.101562 L 356.222656 356.097656 L 18.722656 356.097656 Z M 18.722656 249.101562 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="58b5b4f019">
            <path
              d="M 0 158.886719 L 57 158.886719 L 57 215.886719 L 0 215.886719 Z M 0 158.886719 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="ac3fee102f">
            <path
              d="M 318.03125 158.886719 L 375 158.886719 L 375 215.886719 L 318.03125 215.886719 Z M 318.03125 158.886719 "
              clip-rule="nonzero"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#5cbba5cc33)">
          <path d="M 187.496094 356.398438 C 94.464844 356.398438 18.722656 280.65625 18.722656 187.625 C 18.722656 94.589844 94.464844 18.851562 187.496094 18.851562 C 280.53125 18.851562 356.269531 94.589844 356.269531 187.625 C 356.269531 280.65625 280.53125 356.398438 187.496094 356.398438 Z M 187.496094 21.34375 C 95.792969 21.34375 21.21875 95.921875 21.21875 187.625 C 21.21875 279.328125 95.792969 353.902344 187.496094 353.902344 C 279.199219 353.902344 353.777344 279.328125 353.777344 187.625 C 353.777344 95.921875 279.199219 21.34375 187.496094 21.34375 Z M 187.496094 21.34375 " />
        </g>
        <g clip-path="url(#a775b688ea)">
          <path d="M 187.496094 356.144531 C 94.464844 356.144531 18.722656 280.402344 18.722656 187.371094 C 18.722656 94.335938 94.464844 18.597656 187.496094 18.597656 C 280.53125 18.597656 356.269531 94.335938 356.269531 187.371094 C 356.269531 280.402344 280.53125 356.144531 187.496094 356.144531 Z M 187.496094 21.089844 C 95.792969 21.089844 21.21875 95.667969 21.21875 187.371094 C 21.21875 279.074219 95.792969 353.648438 187.496094 353.648438 C 279.199219 353.648438 353.777344 279.074219 353.777344 187.371094 C 353.777344 95.667969 279.199219 21.089844 187.496094 21.089844 Z M 187.496094 21.089844 " />
        </g>
        <path d="M 204.410156 158.011719 C 255.25 69.957031 119.683594 69.957031 170.519531 158.011719 C 119.683594 69.957031 51.898438 187.363281 153.574219 187.363281 C 51.898438 187.363281 119.683594 304.765625 170.519531 216.714844 C 119.683594 304.765625 255.25 304.765625 204.410156 216.714844 C 255.25 304.765625 323.03125 187.363281 221.355469 187.363281 C 323.03125 187.363281 255.25 69.957031 204.410156 158.011719 Z M 204.410156 158.011719 " />
        <path d="M 212.140625 187.363281 C 212.140625 188.171875 212.101562 188.976562 212.023438 189.78125 C 211.941406 190.585938 211.824219 191.382812 211.667969 192.175781 C 211.507812 192.96875 211.3125 193.75 211.078125 194.523438 C 210.84375 195.296875 210.570312 196.058594 210.261719 196.804688 C 209.953125 197.550781 209.609375 198.28125 209.226562 198.992188 C 208.847656 199.707031 208.429688 200.398438 207.984375 201.070312 C 207.535156 201.742188 207.050781 202.390625 206.539062 203.015625 C 206.027344 203.640625 205.484375 204.238281 204.914062 204.808594 C 204.34375 205.382812 203.746094 205.921875 203.121094 206.4375 C 202.496094 206.949219 201.847656 207.429688 201.175781 207.878906 C 200.503906 208.328125 199.808594 208.742188 199.097656 209.125 C 198.386719 209.503906 197.65625 209.847656 196.910156 210.160156 C 196.164062 210.46875 195.402344 210.738281 194.628906 210.976562 C 193.855469 211.210938 193.074219 211.40625 192.28125 211.5625 C 191.488281 211.71875 190.6875 211.839844 189.882812 211.917969 C 189.082031 211.996094 188.273438 212.039062 187.464844 212.039062 C 186.65625 212.039062 185.851562 211.996094 185.046875 211.917969 C 184.242188 211.839844 183.445312 211.71875 182.652344 211.5625 C 181.859375 211.40625 181.078125 211.210938 180.304688 210.976562 C 179.53125 210.738281 178.769531 210.46875 178.023438 210.160156 C 177.277344 209.847656 176.546875 209.503906 175.835938 209.125 C 175.121094 208.742188 174.429688 208.328125 173.757812 207.878906 C 173.085938 207.429688 172.4375 206.949219 171.8125 206.4375 C 171.1875 205.921875 170.589844 205.382812 170.019531 204.808594 C 169.445312 204.238281 168.90625 203.640625 168.390625 203.015625 C 167.878906 202.390625 167.398438 201.742188 166.949219 201.070312 C 166.5 200.398438 166.085938 199.707031 165.703125 198.992188 C 165.324219 198.28125 164.980469 197.550781 164.667969 196.804688 C 164.359375 196.058594 164.089844 195.296875 163.855469 194.523438 C 163.617188 193.75 163.421875 192.96875 163.265625 192.175781 C 163.109375 191.382812 162.988281 190.585938 162.910156 189.78125 C 162.832031 188.976562 162.792969 188.171875 162.792969 187.363281 C 162.792969 186.554688 162.832031 185.746094 162.910156 184.945312 C 162.988281 184.140625 163.109375 183.339844 163.265625 182.546875 C 163.421875 181.753906 163.617188 180.972656 163.855469 180.199219 C 164.089844 179.425781 164.359375 178.667969 164.667969 177.917969 C 164.980469 177.171875 165.324219 176.441406 165.703125 175.730469 C 166.085938 175.019531 166.5 174.324219 166.949219 173.652344 C 167.398438 172.980469 167.878906 172.332031 168.390625 171.707031 C 168.90625 171.082031 169.445312 170.484375 170.019531 169.914062 C 170.589844 169.34375 171.1875 168.800781 171.8125 168.289062 C 172.4375 167.777344 173.085938 167.292969 173.757812 166.847656 C 174.429688 166.398438 175.121094 165.980469 175.835938 165.601562 C 176.546875 165.21875 177.277344 164.875 178.023438 164.566406 C 178.769531 164.257812 179.53125 163.984375 180.304688 163.75 C 181.078125 163.515625 181.859375 163.320312 182.652344 163.160156 C 183.445312 163.003906 184.242188 162.886719 185.046875 162.804688 C 185.851562 162.726562 186.65625 162.6875 187.464844 162.6875 C 188.273438 162.6875 189.082031 162.726562 189.882812 162.804688 C 190.6875 162.886719 191.488281 163.003906 192.28125 163.160156 C 193.074219 163.320312 193.855469 163.515625 194.628906 163.75 C 195.402344 163.984375 196.164062 164.257812 196.910156 164.566406 C 197.65625 164.875 198.386719 165.21875 199.097656 165.601562 C 199.808594 165.980469 200.503906 166.398438 201.175781 166.847656 C 201.847656 167.292969 202.496094 167.777344 203.121094 168.289062 C 203.746094 168.800781 204.34375 169.34375 204.914062 169.914062 C 205.484375 170.484375 206.027344 171.082031 206.539062 171.707031 C 207.050781 172.332031 207.535156 172.980469 207.984375 173.652344 C 208.429688 174.324219 208.847656 175.019531 209.226562 175.730469 C 209.609375 176.441406 209.953125 177.171875 210.261719 177.917969 C 210.570312 178.667969 210.84375 179.425781 211.078125 180.199219 C 211.3125 180.972656 211.507812 181.753906 211.667969 182.546875 C 211.824219 183.339844 211.941406 184.140625 212.023438 184.945312 C 212.101562 185.746094 212.140625 186.554688 212.140625 187.363281 Z M 212.140625 187.363281 " />
        <g clip-path="url(#58b5b4f019)">
          <path
            ref={outlineLogoRef}
            d="M 28.484375 158.886719 C 25.707031 182.34375 23.457031 184.59375 0 187.371094 C 0.046875 187.375 0.0976562 187.382812 0.144531 187.386719 C 23.464844 190.15625 25.710938 192.445312 28.484375 215.851562 C 31.257812 192.398438 33.507812 190.148438 56.964844 187.371094 C 33.507812 184.59375 31.257812 182.34375 28.484375 158.886719 Z M 28.484375 158.886719 "
          />
        </g>
        <g clip-path="url(#ac3fee102f)">
          <path d="M 346.511719 158.886719 C 343.738281 182.34375 341.484375 184.59375 318.03125 187.371094 C 318.078125 187.375 318.125 187.382812 318.175781 187.386719 C 341.496094 190.15625 343.742188 192.445312 346.511719 215.851562 C 349.289062 192.398438 351.539062 190.148438 374.996094 187.371094 C 351.539062 184.59375 349.289062 182.34375 346.511719 158.886719 Z M 346.511719 158.886719 " />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
{
  /* <svg
        width="500"
        zoomAndPan="magnify"
        viewBox="0 0 375 374.999991"
        height="500"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <path
          fill="#f9c6cf"
          d="M 219.960938 131.148438 C 317.535156 -37.855469 57.335938 -37.855469 154.914062 131.148438 C 57.339844 -37.855469 -72.761719 187.484375 122.386719 187.484375 C -72.761719 187.484375 57.339844 412.824219 154.914062 243.820312 C 57.339844 412.824219 317.539062 412.824219 219.960938 243.820312 C 317.535156 412.824219 447.636719 187.484375 252.488281 187.484375 C 447.636719 187.484375 317.539062 -37.855469 219.960938 131.148438 Z M 219.960938 131.148438 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
        <path
          fill="#ec9191"
          d="M 234.796875 187.484375 C 234.796875 189.035156 234.722656 190.582031 234.570312 192.128906 C 234.417969 193.671875 234.191406 195.203125 233.886719 196.726562 C 233.585938 198.246094 233.207031 199.75 232.757812 201.234375 C 232.308594 202.71875 231.785156 204.175781 231.191406 205.609375 C 230.597656 207.042969 229.9375 208.441406 229.207031 209.808594 C 228.472656 211.179688 227.679688 212.507812 226.816406 213.796875 C 225.953125 215.085938 225.03125 216.332031 224.046875 217.53125 C 223.0625 218.730469 222.023438 219.875 220.925781 220.972656 C 219.828125 222.070312 218.683594 223.109375 217.484375 224.09375 C 216.285156 225.078125 215.039062 226 213.75 226.863281 C 212.460938 227.726562 211.132812 228.523438 209.761719 229.253906 C 208.394531 229.984375 206.996094 230.644531 205.5625 231.238281 C 204.128906 231.832031 202.671875 232.355469 201.1875 232.804688 C 199.703125 233.257812 198.199219 233.632812 196.675781 233.933594 C 195.15625 234.238281 193.625 234.464844 192.082031 234.617188 C 190.535156 234.769531 188.988281 234.84375 187.4375 234.84375 C 185.886719 234.84375 184.339844 234.769531 182.796875 234.617188 C 181.253906 234.464844 179.71875 234.238281 178.199219 233.933594 C 176.675781 233.632812 175.175781 233.257812 173.691406 232.804688 C 172.207031 232.355469 170.746094 231.832031 169.3125 231.238281 C 167.882812 230.644531 166.480469 229.984375 165.113281 229.253906 C 163.746094 228.523438 162.417969 227.726562 161.125 226.863281 C 159.835938 226 158.59375 225.078125 157.394531 224.09375 C 156.195312 223.109375 155.046875 222.070312 153.949219 220.972656 C 152.851562 219.875 151.8125 218.730469 150.828125 217.53125 C 149.84375 216.332031 148.921875 215.085938 148.058594 213.796875 C 147.199219 212.507812 146.402344 211.179688 145.671875 209.808594 C 144.9375 208.441406 144.277344 207.042969 143.683594 205.609375 C 143.089844 204.175781 142.566406 202.71875 142.117188 201.234375 C 141.667969 199.75 141.289062 198.246094 140.988281 196.726562 C 140.6875 195.203125 140.457031 193.671875 140.304688 192.128906 C 140.152344 190.582031 140.078125 189.035156 140.078125 187.484375 C 140.078125 185.933594 140.152344 184.386719 140.304688 182.84375 C 140.457031 181.300781 140.6875 179.765625 140.988281 178.246094 C 141.289062 176.722656 141.667969 175.222656 142.117188 173.738281 C 142.566406 172.253906 143.089844 170.792969 143.683594 169.363281 C 144.277344 167.929688 144.9375 166.527344 145.671875 165.160156 C 146.402344 163.792969 147.199219 162.464844 148.058594 161.171875 C 148.921875 159.882812 149.84375 158.640625 150.828125 157.441406 C 151.8125 156.242188 152.851562 155.09375 153.949219 153.996094 C 155.046875 152.898438 156.195312 151.859375 157.394531 150.875 C 158.59375 149.890625 159.835938 148.96875 161.125 148.105469 C 162.414062 147.246094 163.746094 146.449219 165.113281 145.71875 C 166.480469 144.988281 167.882812 144.324219 169.3125 143.730469 C 170.746094 143.136719 172.207031 142.613281 173.691406 142.164062 C 175.175781 141.714844 176.675781 141.339844 178.199219 141.035156 C 179.71875 140.734375 181.253906 140.503906 182.796875 140.351562 C 184.339844 140.203125 185.886719 140.125 187.4375 140.125 C 188.988281 140.125 190.535156 140.203125 192.082031 140.351562 C 193.625 140.503906 195.15625 140.734375 196.675781 141.035156 C 198.199219 141.339844 199.703125 141.714844 201.1875 142.164062 C 202.671875 142.613281 204.128906 143.136719 205.5625 143.730469 C 206.996094 144.324219 208.394531 144.988281 209.761719 145.71875 C 211.132812 146.449219 212.460938 147.246094 213.75 148.105469 C 215.039062 148.96875 216.285156 149.890625 217.484375 150.875 C 218.683594 151.859375 219.828125 152.898438 220.925781 153.996094 C 222.023438 155.09375 223.0625 156.242188 224.046875 157.441406 C 225.03125 158.640625 225.953125 159.882812 226.816406 161.171875 C 227.679688 162.464844 228.472656 163.792969 229.207031 165.160156 C 229.9375 166.527344 230.597656 167.929688 231.191406 169.363281 C 231.785156 170.792969 232.308594 172.253906 232.757812 173.738281 C 233.207031 175.222656 233.585938 176.722656 233.886719 178.246094 C 234.191406 179.765625 234.417969 181.300781 234.570312 182.84375 C 234.722656 184.386719 234.796875 185.933594 234.796875 187.484375 Z M 234.796875 187.484375 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </svg> */
}