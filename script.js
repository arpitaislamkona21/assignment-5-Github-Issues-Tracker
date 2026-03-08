const API="https://phi-lab-server.vercel.app/api/v1/lab/issues"

async function loadIssues(type="all"){

let res=await fetch(API)
let data=await res.json()

let issues=data.data

if(type==="open"){
issues=issues.filter(i=>i.status==="open")
}

if(type==="closed"){
issues=issues.filter(i=>i.status==="closed")
}

displayIssues(issues)

}

loadIssues()


const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const allIssues = document.querySelectorAll('#issuesContainer > div');

    allIssues.forEach(issue => {

        const title = issue.querySelector('h3').innerText.toLowerCase();
        
if (title.includes(searchTerm)) {
            issue.style.display = "block";
        } else {
            issue.style.display = "none";
        }
    });
}


searchBtn.addEventListener('click', performSearch);


searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function displayIssues(issues){

let container=document.getElementById("issuesContainer")

container.innerHTML=""

issues.forEach(issue=>{

const borderTopClass = issue.status === "open" ? "border-green-500" : "border-purple-500";

const priorityColorClass = 
    issue.priority.toUpperCase() === "HIGH" ? "text-red-600 bg-red-100" : 
    issue.priority.toUpperCase() === "MEDIUM" ? "text-amber-500 bg-amber-100" : 
    "text-gray-500 bg-gray-100";
container.innerHTML += `
  <div class="bg-white rounded-lg shadow-md border-t-4 ${borderTopClass} p-5 flex flex-col gap-4">
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
            <span class="block w-6 h-6 rounded-full bg-green-200"><img src="./assets/Open-Status.png" alt=""></span>
            
        </div>
        <span class="text-[10px] font-bold ${priorityColorClass} px-3 py-1 rounded-full uppercase tracking-wider">
            ${issue.priority}
        </span>
    </div>

    <div class="flex-grow">
        <h3 class="text-lg font-bold text-gray-800 leading-snug mb-2">
            ${issue.title}
        </h3>
        <p class="text-sm text-gray-500 leading-relaxed line-clamp-2">
            ${issue.description}
        </p>
    </div>

    <div class=" pt-4 mt-1 flex flex-col gap-4">
        <div class="flex gap-2.5 items-center text-xs font-medium">
            <p class="bg-red-50 text-red-600 px-2 py-1 rounded flex items-center gap-1 border border-red-400 rounded-full"><span><img src="./assets/BugDroid.png" alt=""></span><span>BUG</span></p>
            <span class="bg-amber-50 text-amber-600 px-2 py-1 rounded flex items-center gap-1 border border-red-400 rounded-full"><span><img src="./assets/Lifebuoy.png" alt=""></span>HELP WANTED</span>
        </div>
        
        <div class="text-xs border-t pt-2 text-gray-500">
            <p class="font-medium mb-1">#${issue.id} by ${issue.author}</p>
            <p>${issue.createdAt.split('T')[0]}</p>
        </div>
    </div>
  </div>
`;



})


}
