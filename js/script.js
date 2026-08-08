let currentTab = 'all';
const tabActive = ['bg-[#3B82F6]','text-white'];
const tabInactive = ['bg-[#FFFFFF]','text-[#64748B]'];


const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('rejected-container');


function switchTab (tab) {
    const tabs = ['all', 'interview', 'rejected'];


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
    
    if(tab === 'all') {
        allContainer.classList.remove('hidden');
    } else if (tab === 'interview') {
        interviewContainer.classList.remove('hidden');
    } else {
        rejectedContainer.classList.remove('hidden');
    }
}




switchTab(currentTab);