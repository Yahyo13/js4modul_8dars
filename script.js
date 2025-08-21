let canva1 = document.querySelector(`.canva1`);
let canva2 = document.querySelector(`.canva2`);
let canva3 = document.querySelector(`.canva3`);
let canva4 = document.querySelector(`.canva4`);
let canva5 = document.querySelector(`.canva5`);
let canva6 = document.querySelector(`.canva6`);
let canva7 = document.querySelector(`.canva7`);
let canva8 = document.querySelector(`.canva8`);

new Chart(canva1,{
    type: `bar`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(248, 112, 1, 0.84)`,
                
            }
        ]
    }
})

new Chart(canva2,{
    type: `bar`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(42, 248, 1, 0.51)`,
                
            }
        ]
    },
    options: {
        indexAxis: 'y' // This makes the bar chart horizontal
    }
})
new Chart(canva3,{
    type: `line`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(232, 248, 1, 0.76)`,
                
            }
        ]
    },
    
})
new Chart(canva4,{
    type: `polarArea`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(1, 211, 248, 0.93)`,
                
            }
        ]
    },
    
})
new Chart(canva5,{
    type: `doughnut`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(1, 211, 248, 0.93)`,
                
            }
        ]
    },
    
})
new Chart(canva6,{
    type: `pie`,
    data: {
        labels: [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`],
        datasets: [
            {
                label: `Salary`,
                data: [800, 1000, 1120, 900, 1200, 1800, 1200, 900, 1600, 1100, 1250, 1900],
                backgroundColor: `rgba(1, 211, 248, 0.93)`,
                
            }
        ]
    },
    
})