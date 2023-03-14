import "swiper/scss";
import "swiper/scss/autoplay";
import "./styles.scss";

import { Routes } from "./Routes";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<Routes />);
