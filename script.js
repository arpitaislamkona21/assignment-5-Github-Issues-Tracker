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

// const searchInput = document.getElementById('searchInput');


// searchInput.addEventListener('keyup', (e) => {
//     const searchTerm = e.target.value.toLowerCase();
    
    
//     const allIssues = document.querySelectorAll('#issuesContainer > div');

//     allIssues.forEach(issue => {
       

//         const title = issue.querySelector('h3').innerText.toLowerCase();
        
        
//         if (title.includes(searchTerm)) {
//             issue.style.display = "block";
//         } else {
//             issue.style.display = "none";
//         }
//     });
// });
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn'); // বাটনটি ধরলাম

// সার্চ করার মূল ফাংশন
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

// বাটনে ক্লিক করলে সার্চ হবে
searchBtn.addEventListener('click', performSearch);

// অথবা এন্টার বাটন চাপলে সার্চ হবে (ঐচ্ছিক কিন্তু ইউজার ফ্রেন্ডলি)
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function displayIssues(issues){

let container=document.getElementById("issuesContainer")

container.innerHTML=""

issues.forEach(issue=>{

let border=
issue.status==="open"
? "border-green-500"
: "border-purple-500"

container.innerHTML+=`

<div class="bg-white border-t-4 ${border} rounded shadow p-4">

<div class="flex justify-between text-xs mb-2">

<span class="bg-red-100 text-red-600 px-2 rounded">
${issue.priority}
</span>

<span class="bg-gray-200 px-2 rounded">
${issue.category}
</span>

</div>

<h3 class="font-semibold text-sm mb-1">
${issue.title}
</h3>

<p class="text-gray-500 text-xs mb-3">
${issue.description}
</p>

<div class="flex gap-2 text-xs mb-3">

<span class="bg-red-100 text-red-600 px-2 rounded">
BUG
</span>

<span class="bg-yellow-100 text-yellow-700 px-2 rounded">
HELP WANTED
</span>

</div>

<p class="text-gray-400 text-xs">
By ${issue.author}
</p>

<p class="text-gray-400 text-xs">
${issue.createdAt}
</p>

</div>

`

})

}