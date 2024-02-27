import React, { useEffect } from "react";
import Swal from "sweetalert2";

function SweetAlert({ show, setIsAlertVisible, ...rest }) {
  useEffect(() => {
    if (show) {
      Swal.fire({
        ...rest,
        showConfirmButton : rest.showConfirmButton
      }).then((result) => {
        if (result.isConfirmed) {
          setIsAlertVisible(false);
        } else if (result.isDismissed) {
          setIsAlertVisible(false);
        }
      });
    }
  }, [show]);

  return <></>;
}
export default SweetAlert;
