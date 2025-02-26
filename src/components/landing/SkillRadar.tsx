import { Radar } from "react-chartjs-2";
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillRadar = () => {
    const data = {
        labels: ["Python", "JavaScript", "SQL", "Java", "REST API", "Git"],
        datasets: [
            {
                data: [80, 65, 85, 60, 85, 90],
                backgroundColor: "rgba(74, 155, 120, 0.25)", // #4A9B78
                borderColor: "#4A9B78",
                borderWidth: 3,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                min: 0,
                max: 100,
                pointLabels: {
                    font: {
                        size: 14,
                        family: "Open Sans, sans-serif",
                    },
                    color: "#D0D3D7",
                },
                grid: { color: "rgba(107, 119, 132, 0.25)" }, // #6B7784
                angleLines: { color: "rgba(107, 119, 132, 0.25)" },
                ticks: { display: false },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-60 mx-auto">
            <Radar data={data} options={options} />
        </div>
    );
};

export default SkillRadar;
