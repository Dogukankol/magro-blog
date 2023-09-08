import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faSearch}
        style={{ fontSize: 14, width: 64, color: "blue" }}
      />

      <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 14, width: 64, color: "orange" }}
      />

      <FontAwesomeIcon
        icon={faAnchor}
        style={{ fontSize: 14, width: 64, color: "green" }}
      />
    </div>
  )
}
