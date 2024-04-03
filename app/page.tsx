import Image from "next/image";

export default function Home() {
  return(
    <main>
    {header()}
    {introduction("Isaac")}
    {favoritesList()}
    {website()}
    </main>
  );
}

function header(){
  return (
      <h1>Hello Everyone</h1>
  )
}

function introduction(name: String){
  return (<p>My name is {name} and I am finishing my 3rd year of my CS degree. This weekend I am getting married to my wonderful wife. I can't wait to learn more about react and be able to use it in my professional career.</p>);
}

function favoritesList(){
  return (
  <main>
    <h3>My Favorite Video games</h3>
    <ul>
      <li>World of Warcraft</li>
      <li>Runescape</li>
      <li>Halo 1, 2, 3</li>
      <li>Skyrim</li>
      <li>Minecraft</li>
    </ul>
  </main>
  );
}

function website(){
  return(
    <main>
      <h3>Click here....</h3>
        <a href="https://en.wikipedia.org/wiki/Dog">Important Dog Information</a>
      </main>
  )
}

