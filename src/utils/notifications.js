import toastr from "toastr";
const modalNotification = ({ type, message }) => {
  let icon = {
    info: "ni ni-info-fill",
    success: "ni ni-check-circle-fill",
    error: "ni ni-cross-circle-fill",
    warning: "ni ni-alert-fill",
  };

  let msg = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="toast-header bg-${type} text-white">
                <strong class="mr-auto"><i class="icon ${icon[type]}"></i> ${type.toUpperCase()}</strong>
                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="toast-body">${message}</div>
            </div>`;
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "",
    closeHtml: '<span class="btn-trigger">&#10006;</span>',
    preventDuplicates: true,
    showDuration: "1500",
    hideDuration: "1500",
    timeOut: "2000",
    toastClass: "toastr",
    extendedTimeOut: "5000",
  };

  toastr[type](msg);
};
export default modalNotification;
