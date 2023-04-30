import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, DocumentReference, Firestore, collection, collectionData, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDBService {
  constructor(private firestore: Firestore) { }

  guardarObjeto(nombreColeccion: string, objetoAGuardar: any) {
    const coleccion: CollectionReference<DocumentData> = collection(this.firestore, nombreColeccion);
    const documentoNuevo: DocumentReference<DocumentData> = doc(coleccion);
    objetoAGuardar.id = documentoNuevo.id;
    return setDoc(documentoNuevo, objetoAGuardar);
  }

  async traerListaDeObjetos(nombreColeccion: string) {
    const coleccion: CollectionReference<DocumentData> = collection(this.firestore, nombreColeccion);
    const docs = await getDocs(coleccion)
      .then((docs) => {
        return docs;
      });

    const listaDeObjetos: DocumentData[] = [];

    docs.forEach(item => {
      listaDeObjetos.push(item.data());
    });

    return listaDeObjetos;
  }

  async traerListaDeObjetosConObservable(nombreColeccion: string) {
    const coleccion: CollectionReference<DocumentData> = collection(this.firestore, nombreColeccion);
    return collectionData(coleccion);
  }

  modificarObjeto(nombreColeccion: string, objetoAModificar: any) {
    const coleccion: CollectionReference<DocumentData> = collection(this.firestore, nombreColeccion);
    const documentoOriginal: DocumentReference<DocumentData> = doc(objetoAModificar.id);
    return updateDoc(documentoOriginal, { ...objetoAModificar });
  }

  eliminarObjeto(nombreColeccion: string, id: string) {
    const coleccion: CollectionReference<DocumentData> = collection(this.firestore, nombreColeccion);
    const documentoAEliminar: DocumentReference<DocumentData> = doc(coleccion, id);
    return deleteDoc(documentoAEliminar);
  }
}
