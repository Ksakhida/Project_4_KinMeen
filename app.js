// Lesion Types and their Full Forms
const lesionTypes = {
    'nv': 'Melanocytic nevi',
    'mel': 'Melanoma',
    'bkl': 'Benign keratosis-like lesions',
    'bcc': 'Basal cell carcinoma',
    'akiec': 'Actinic keratoses',
    'vasc': 'Vascular lesions',
    'df': 'Dermatofibroma'
};

// Donut Chart: Lesion Types Distribution
const donutCtx = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(donutCtx, {
    type: 'doughnut',
    data: {
        labels: Object.values(lesionTypes),
        datasets: [{
            data: [30, 25, 20, 10, 5, 5, 5], // Example percentage values
            backgroundColor: ['#6D4C41', '#8D6E63', '#A1887F', '#D7CCC8', '#C5CAE9', '#B39DDB', '#9FA8DA'],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Allow resizing
        plugins: {
            legend: {
                display: true,
                position: 'right', // Position the legend to the right
                labels: {
                    generateLabels: (chart) => {
                        const { data } = chart;
                        const total = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                        return data.labels.map((label, i) => {
                            const value = data.datasets[0].data[i];
                            const percentage = ((value / total) * 100).toFixed(1) + '%';
                            return {
                                text: `${label}: ${percentage}`,
                                fillStyle: data.datasets[0].backgroundColor[i],
                                fontColor: '#333',
                                font: {
                                    size: 14
                                }
                            };
                        });
                    },
                    padding: 10
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const percentage = context.raw + '%';
                        return `${label}: ${percentage}`;
                    }
                }
            },
            datalabels: {
                color: '#fff',
                display: true,
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    return context.label + '\n' + percentage;
                },
                anchor: 'center',
                align: 'center',
                font: {
                    size: 12
                }
            },
            beforeDraw: (chart) => {
                const ctx = chart.ctx;
                const { data, options } = chart;
                const { datasets, labels } = data;
                const total = datasets[0].data.reduce((acc, val) => acc + val, 0);
                const centerText = 'Lesion Types';
                const fontSize = 16;
                const x = chart.width / 2;
                const y = chart.height / 2;
                ctx.save();
                ctx.font = `bold ${fontSize}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = '#333';
                ctx.fillText(centerText, x, y);
                ctx.restore();
            }
        },
        cutout: '60%', // Adjust donut size to fit within the box
        radius: '80%'  // Adjust donut size to fit within the box
    }
});
document.getElementById('donut-analysis').innerText = "The highest percentage of lesion types is Melanocytic nevi (30%), while the lowest is Dermatofibroma (5%).";

// Bubble Chart: Lesion Types by Sex and Age
const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
const bubbleChart = new Chart(bubbleCtx, {
    type: 'bubble',
    data: {
        datasets: [
            // Example bubbles for each lesion type
            {
                label: 'Melanocytic nevi - Male',
                data: [{ x: 20, y: 35, r: 10 }],
                backgroundColor: '#8D6E63'
            },
            {
                label: 'Melanocytic nevi - Female',
                data: [{ x: 25, y: 30, r: 12 }],
                backgroundColor: '#8D6E63'
            },
            {
                label: 'Melanoma - Male',
                data: [{ x: 50, y: 15, r: 15 }],
                backgroundColor: '#6D4C41'
            },
            {
                label: 'Melanoma - Female',
                data: [{ x: 45, y: 20, r: 18 }],
                backgroundColor: '#6D4C41'
            },
            {
                label: 'Benign keratosis - Male',
                data: [{ x: 30, y: 40, r: 12 }],
                backgroundColor: '#A1887F'
            },
            {
                label: 'Benign keratosis - Female',
                data: [{ x: 35, y: 38, r: 14 }],
                backgroundColor: '#A1887F'
            },
            {
                label: 'Basal cell carcinoma - Male',
                data: [{ x: 40, y: 25, r: 10 }],
                backgroundColor: '#D7CCC8'
            },
            {
                label: 'Basal cell carcinoma - Female',
                data: [{ x: 42, y: 22, r: 12 }],
                backgroundColor: '#D7CCC8'
            },
            {
                label: 'Actinic keratoses - Male',
                data: [{ x: 45, y: 20, r: 10 }],
                backgroundColor: '#C5CAE9'
            },
            {
                label: 'Actinic keratoses - Female',
                data: [{ x: 50, y: 18, r: 11 }],
                backgroundColor: '#C5CAE9'
            },
            {
                label: 'Vascular lesions - Male',
                data: [{ x: 55, y: 22, r: 9 }],
                backgroundColor: '#B39DDB'
            },
            {
                label: 'Vascular lesions - Female',
                data: [{ x: 60, y: 20, r: 10 }],
                backgroundColor: '#B39DDB'
            },
            {
                label: 'Dermatofibroma - Male',
                data: [{ x: 60, y: 10, r: 8 }],
                backgroundColor: '#9FA8DA'
            },
            {
                label: 'Dermatofibroma - Female',
                data: [{ x: 65, y: 12, r: 9 }],
                backgroundColor: '#9FA8DA'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Allow resizing
        scales: {
            x: { title: { display: true, text: 'Age' } },
            y: { title: { display: true, text: 'Lesion Count' } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: Age ${context.raw.x}, Count ${context.raw.y}`;
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            }
        }
    }
});
document.getElementById('bubble-analysis').innerText = "Male patients tend to have Melanocytic nevi in their 20s, while females show more benign keratosis-like lesions in their 30s.";

// Bar Chart: Lesion Types by Age Group 
const ageGroupCtx = document.getElementById('ageGroupChart').getContext('2d');
const ageGroupChart = new Chart(ageGroupCtx, {
    type: 'bar',
    data: {
        labels: ['0-20', '21-40', '41-60', '61-80'],
        datasets: [
            {
                label: 'Melanocytic nevi',
                data: [25, 30, 15, 10],
                backgroundColor: '#8B4513' // Darker earth tone
            },
            {
                label: 'Melanoma',
                data: [10, 20, 25, 5],
                backgroundColor: '#A0522D' // Darker earth tone
            },
            {
                label: 'Benign keratosis-like lesions',
                data: [15, 25, 20, 10],
                backgroundColor: '#D2B48C' // Darker earth tone
            },
            {
                label: 'Basal cell carcinoma',
                data: [5, 10, 15, 20],
                backgroundColor: '#CD853F' // Darker earth tone
            },
            {
                label: 'Actinic keratoses',
                data: [5, 15, 25, 20],
                backgroundColor: '#F4A460' // Darker earth tone
            },
            {
                label: 'Vascular lesions',
                data: [10, 10, 15, 10],
                backgroundColor: '#8B4513' // Darker earth tone
            },
            {
                label: 'Dermatofibroma',
                data: [5, 5, 10, 15],
                backgroundColor: '#A0522D' // Darker earth tone
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Allow resizing
        scales: {
            x: { title: { display: true, text: 'Age Group' } },
            y: { title: { display: true, text: 'Count' } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}`;
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            }
        }
    }
});
document.getElementById('ageGroup-analysis').innerText = "Melanocytic nevi are most prevalent in the 21-40 age group, while Basal cell carcinoma is more common in those aged 61-80.";

// Bar Chart: Precise Recall by Sex (Updated)
const recallCtx = document.getElementById('recallChart').getContext('2d');
const recallChart = new Chart(recallCtx, {
    type: 'bar',
    data: {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: 'Melanocytic nevi',
                data: [90, 85],
                backgroundColor: '#8D6E63' // Darker Earth Tone
            },
            {
                label: 'Melanoma',
                data: [80, 70],
                backgroundColor: '#6D4C41' // Darker Earth Tone
            },
            {
                label: 'Benign keratosis-like lesions',
                data: [85, 80],
                backgroundColor: '#A1887F' // Darker Earth Tone
            },
            {
                label: 'Basal cell carcinoma',
                data: [75, 65],
                backgroundColor: '#4E342E' // Darker Earth Tone
            },
            {
                label: 'Actinic keratoses',
                data: [70, 60],
                backgroundColor: '#3E2723' // Darker Earth Tone
            },
            {
                label: 'Vascular lesions',
                data: [65, 55],
                backgroundColor: '#5D4037' // Darker Earth Tone
            },
            {
                label: 'Dermatofibroma',
                data: [60, 50],
                backgroundColor: '#3C2721' // Darker Earth Tone
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Allow resizing
        scales: {
            x: { title: { display: true, text: 'Sex' } },
            y: { title: { display: true, text: 'Precise Recall (%)' } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}%`;
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            }
        }
    }
});
document.getElementById('recall-analysis').innerText = "Melanocytic nevi show the highest precise recall in males at 90% and in females at 85%. The lowest recall is for Dermatofibroma in males at 60% and in females at 50%.";

// Bar Chart: Lesion Types and Localization
const localizationCtx = document.getElementById('localizationChart').getContext('2d');
const localizationChart = new Chart(localizationCtx, {
    type: 'bar',
    data: {
        labels: ['Back', 'Lower Extremity', 'Trunk', 'Upper Extremity', 'Abdomen', 'Face', 'Chest', 'Foot', 'Unknown', 'Neck', 'Scalp', 'Hand', 'Ear', 'Genital', 'Acral'],
        datasets: [
            {
                label: 'Head and Neck',
                data: [20, 15, 10, 25, 5, 5, 10, 5, 5, 5, 5, 5, 5, 5, 5],
                backgroundColor: '#8D6E63' // Darker Earth Tone
            },
            {
                label: 'Trunk',
                data: [15, 20, 15, 10, 10, 10, 5, 10, 5, 5, 5, 5, 5, 5, 5],
                backgroundColor: '#6D4C41' // Darker Earth Tone
            },
            {
                label: 'Limbs',
                data: [10, 10, 10, 20, 5, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                backgroundColor: '#A1887F' // Darker Earth Tone
            },
            {
                label: 'Other',
                data: [5, 5, 10, 5, 15, 5, 10, 5, 5, 5, 5, 5, 5, 5, 5],
                backgroundColor: '#4E342E' // Darker Earth Tone
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Allow resizing
        scales: {
            x: { title: { display: true, text: 'Localization' } },
            y: { title: { display: true, text: 'Percentage' } }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw}%`;
                    }
                }
            },
            legend: {
                position: 'top',
                labels: {
                    color: '#333'
                }
            }
        }
    }
});
document.getElementById('localization-analysis').innerText = "The bar chart shows the distribution of different lesion types across various body locations. It seems back, lower extremity, trunk, and upper extremity are heavily compromised regions of skin cancer. This highlights areas of increased risk that may need more focused monitoring and intervention.";
