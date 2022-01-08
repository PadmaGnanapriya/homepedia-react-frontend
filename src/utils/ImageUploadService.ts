import {v4 as uuid} from "uuid";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {certificateImageRef, paymentImageRef, serviceSupplierImageRef, storage} from "./firebase";

export const uploadServiceSupplierImage = async (image:any) => {
    const fileNameId = 'proPic_' + uuid() + '.' + image.name.split('.').reverse()[0];
    const fileRef = ref(serviceSupplierImageRef, fileNameId);
    await uploadBytes(fileRef, image);
    return await getDownloadURL(ref(storage, 'serviceSuppliers/' + fileNameId));
}

export const uploadCertificate = async (image:any) => {
    const fileNameId = 'Certify_' + uuid() + '.' + image.name.split('.').reverse()[0];
    const fileRef = ref(certificateImageRef, fileNameId);
    await uploadBytes(fileRef, image);
    return await getDownloadURL(ref(storage, 'certificates/' + fileNameId));
}

export const uploadPayment = async (image:any) => {
    const fileNameId = 'pymnt_' + uuid() + '.' + image.name.split('.').reverse()[0];
    const fileRef = ref(paymentImageRef, fileNameId);
    await uploadBytes(fileRef, image);
    return await getDownloadURL(ref(storage, 'payments/' + fileNameId));
}