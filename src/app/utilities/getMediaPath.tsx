export const getMediaPath = (path: string) => {
    if(path){
        if (path.includes("http")){
            return path;
        }else {
            // return 'http://192.168.158.179:8000/storage/' + path;
            return 'https://websong.liara.run/storage/' + path;
        }
    }
    return path
};