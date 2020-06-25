import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h2>Episodes: <<pan>${character.episode.length}</span></h2>
        <h2>Status: <span>${character.status}</span></h2>
        <h2>Species: <span>${character.species}</span></h2>
        <h2>Gender: <span>${character.gender}</span></h2>
        <h2>Origin: <span>${character.origin.name}</span></h2>
        <h2>Last Location: <span>${character.location.name}</span></h2>
      </article>
    </div>
  `;
  return view;
};

export default Character;