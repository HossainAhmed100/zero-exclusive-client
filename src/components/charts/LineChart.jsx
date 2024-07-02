import { Button, Select, SelectItem } from "@nextui-org/react";
import Chart from "react-apexcharts";
import { FaAngleRight } from "react-icons/fa6";

function LineChart() {
    const chartConfig = {
        type: "line",
        height: 240,
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 16,
              right: 16,
              top: -26
            },
          },
        series: [
            {
              name: "Developer Edition",
              data: [150, 141, 145, 152, 135, 125],
              color: "#1A56DB",
            },
            {
              name: "Designer Edition",
              data: [64, 41, 76, 41, 113, 173],
              color: "#7E3BF2",
            },
          ],
          fill: {
            type: "gradient",
            gradient: {
              opacityFrom: 0.55,
              opacityTo: 0,
              shade: "#1C64F2",
              gradientToColors: ["#1C64F2"],
            },
          },
        options: {
            chart: {
                height: "100%",
                maxWidth: "100%",
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                  enabled: false,
                },
                toolbar: {
                  show: false,
                },
              },
          title: {
            show: "",
          },
            dataLabels: {
                enabled: true,
                // offsetX: 10,
                style: {
                cssClass: 'text-xs text-white font-medium'
                },
            },
          colors: ["#020617"],
          stroke: {
            lineCap: "round",
            curve: "smooth",
            width: 6
          },
          markers: {
            size: 0,
          },
          xaxis: {
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
            labels: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          legend: {
            show: true
          },
          yaxis: {
            show: false,
            labels: {
              formatter: function (value) {
                return '$' + value;
              }
            }
          },
        
        
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
        },
      };

      const reportWeeks = [
        { label: "Yesterday", key: "yesterday" },
        { label: "Today", key: "today" },
        { label: "Last 7 days", key: "last7days" },
        { label: "Last 30 days", key: "last30days" },
        { label: "Last 90 days", key: "last90days" },
        { label: "Life Time", key: "lifetime" }
      ];
        
  return (
    
<div className="w-full flex flex-col justify-around bg-white rounded-lg border-1 dark:bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between mb-5">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
    </div>
    <div
      className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="data-labels-chart"><Chart {...chartConfig}/></div>
  <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
        <Select 
            size="sm"
            className="max-w-36"
            defaultSelectedKeys={["yesterday"]}
            aria-label="Select Report Date"
          >
            {reportWeeks.map((item) => (
              <SelectItem key={item.key}>
                {item.label}
              </SelectItem>
            ))}
          </Select>
        <Button endContent={<FaAngleRight />} color="primary" variant="flat" size="sm" radius="sm">
            Full Report
        </Button> 
        </div>
  </div>
  </div>

  )
}

export default LineChart