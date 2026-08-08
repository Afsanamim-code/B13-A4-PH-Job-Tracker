let currentTab = 'all';
const tabActive = ['bg-[#3B82F6]','text-white'];
const tabInactive = ['bg-[#FFFFFF]','text-[#64748B]'];


const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');

const emptyState = document.getElementById('empty-state');

function switchTab (tab) {
    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab;


    for (const t of tabs) {
    const tabName = document.getElementById('tab-' +  t);
    if(t === tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        } 
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for (const section of pages) {
        section.classList.add('hidden');
    }

    
    emptyState.classList.add('hidden');


    if(tab === 'all') {
        allContainer.classList.remove('hidden');
    } else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
    } else {
        rejectedContainer.classList.remove('hidden');
    }
    updateStat();
}


// stat update
const totalStat = document.getElementById('stat-total');
const interviewStat = document.getElementById('stat-interview');
const rejectStat = document.getElementById('stat-rejected');

const availableStat = document.getElementById('available');

switchTab(currentTab);


document.getElementById('jobs-container').addEventListener('click', function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest('.card');

    if (!card) return;

    const parent = card.parentNode;
    const status = card.querySelector('.status');


    if(clickedElement.classList.contains('interview')) {
        status.innerText = 'INTERVIEWED';
        interviewContainer.appendChild(card);

    } 
    else if (clickedElement.classList.contains('rejected')) {
        status.innerText = 'REJECTED';
        rejectedContainer.appendChild(card);
    }
    else if (clickedElement.classList.contains('delete')) {
        parent.removeChild(card);
    }
    updateStat();
});


function updateStat () {
    const counts = {
        all : allContainer.children.length,
        interview : interviewContainer.children.length,
        rejected : rejectedContainer.children.length,
    };

    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;


    availableStat.innerText = counts[currentTab];


    if (counts[currentTab] < 1) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
};

