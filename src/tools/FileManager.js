import store from "@/store";
/**
 *  Upload file
 *  ------------------------
 *  Api address | /files
 *  ------------------------
 *  @param file | Type file
 *  ------------------------
 *  method : POST
 *  ------------------------
 *  Description :
 *  ------------------------
 *  upload file to server
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
// export function uploadDocument(file) {
//   /* Initialize the form data */
//   let formData = new FormData();
//
//   /* Add the form data we need to submit */
//   formData.append("file", file);
//
//   /* Make the request to the /upload/uploadProfileImage  */
//   return api.post(urls.api("kyc_upload_doc"), formData, {
//     maxContentLength: 2000000000,
//     maxBodyLength: 20000000000,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// }

/**
 *  delete file
 *  ------------------------
 *  Api address | /files
 *  ------------------------
 *  @param file_id | Type Sting
 *  ------------------------
 *  method : Delete

 *  ------------------------
 *  Delete file from server
 *  ------------------------
 *  @return Promise
 *  ------------------------
 */
export function deleteFile(file_id) {
  console.log(file_id);
}

/**
 *  ------------------------
 *  Description :
 *  ------------------------
 *  Generate download link url
 *  ------------------------
 *  @return String
 *  ------------------------
 */
export function fileDownloadUrlFormatter(file_id) {
  return (
    process.env.VUE_APP_BASE_ASSETS_URL +
    file_id +
    `?token=${store.getters["auth/access_token"]}`
  );
}
