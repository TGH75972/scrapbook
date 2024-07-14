body {
    background-color: #030303;
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin: 0;
    padding: 0;
}

.container {
    padding: 20px;
    margin-top: 50px;
}

h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 60px;
    margin-top: -40px;
    color: white;
    font-weight: bold;
}

#upload {
    margin-top: 50px;
    padding: 10px;
    border: 2px solid black;
    background-color: white;
    border-radius: 15px;
    margin: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
}

#scrapbook {
    margin: 40px;
    padding-top: 50px;
    padding-bottom: 40px;
    border-radius: 20px;
    background-color: rgb(54, 54, 54);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.image-container {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    transform: rotate(var(--rotation));
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container:hover {
    transform: scale(1.1) rotate(var(--rotation));
    transition: transform 0.3s ease;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
}

.pin {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background-color: red;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.pin::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 15px;
    background-color: rgb(248, 238, 238);
}

.pin:hover{
    cursor: pointer;
}

span{
    color: yellow;
}
