//creating database structure

const db = new Dexie("SportsStats App");
db.version(1).stores({ stats: "++id, stat" });

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

//add stat
form.onsubmit = async (event) => {
  event.preventDefault();
  const stat = input.value;
  await db.stats.add({ stat });
  await getStats();
  form.reset();
};

//display stat
const getStats = async () => {
  const allStats = await db.stats.reverse().toArray();
  list_el.innerHTML = allStats
    .map(
      (stat) => `
    
    <div class="task">
    <div class="content">
    <input id="edit" class="text" readonly="readonly" type="text" value= ${stat.stat}>
    </div>
    <div class="actions">
    <button class="delete" onclick="deleteTodo(event, ${stat.id})">Delete</button>
    </div>
    </div>
    `
    )
    .join("");
};
window.onload = getStats;

//delete stat
const deleteStat = async (event, id) => {
  await db.stats.delete(id);
  await getStats();
};