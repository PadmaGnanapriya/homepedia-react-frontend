import React from "react";
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {cardData, chartData, pieData} from "../store/dummyData";
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import {Bar, Line, Pie} from 'react-chartjs-2';
// @ts-ignore
import faker from 'faker';
import {cities, serviceTypes} from "../store/dummyData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
};

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'];

export const dataDailyVisitCount = {
    labels: weekDays,
    datasets: [
        {
            label: 'Last Week',
            data: chartData.totalVisitorCountForWeek.last,
            borderColor: 'rgb(215,38,175)',
            backgroundColor: 'rgba(209, 31, 169, 0.5)',
        },
        {
            label: 'This Week',
            data: chartData.totalVisitorCountForWeek.current,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const dataMonthlyVisitCount = {
    labels: months,
    datasets: [
        {
            label: 'Last Week',
            data: chartData.totalVisitorCountForMonth.last,
            borderColor: 'rgb(215,38,175)',
            backgroundColor: 'rgba(215,38,175, 0.5)',
        },
        {
            label: 'This Week',
            data: chartData.totalVisitorCountForMonth.current,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const dataMonthlyIncomeDistribution = {
    labels: months,
    datasets: [
        {
            label: 'Last Month',
            data: chartData.monthlyIncomeForYear.last,
            backgroundColor: 'rgba(215,38,175, 0.5)',
        },
        {
            label: 'This Month',
            data:chartData.monthlyIncomeForYear.current,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

//todo:
export const dataProvinceViceSupplierDeviation = {
    labels: ['Western', 'Central', 'Southern', 'Uva', 'Sabaragamuwa', 'North Western', 'North Central', 'Northern'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(215,38,175, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(215,38,175, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const visitorDeviation = {
    labels: pieData.visitorDistribution.map((recode)=> recode.name),
    datasets: [
        {
            label: '# of Votes',
            data:  pieData.visitorDistribution.map((recode)=> recode.count),
            backgroundColor: [
                'rgba(215,38,175, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(215,38,175, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const Dashboard: React.FC = () => {
    return (
      <Container>

          <Row className="py-4">

              <Col sm={6} md={3}>
                  <Card className="card-div-fluid py-2 px-4">
                      <h4>Income</h4>
                      <h5>Last Year: Rs. {cardData.totalIncome.last}</h5>
                      <h5>This Year: Rs. {cardData.totalIncome.current}</h5>
                  </Card>
              </Col>
              <Col sm={6} md={3}>
                  <Card className="card-div-fluid py-2 px-4">
                      <h4>New Sup. Registration</h4>
                      <h5>Last Month: {cardData.newServiceSupplierRegistration.last}</h5>
                      <h5>This Month: {cardData.newServiceSupplierRegistration.current}</h5>
                  </Card>
              </Col>
              <Col sm={6} md={3}>
                  <Card className="card-div-fluid py-2 px-4">
                      <h4>Total Sup. Request</h4>
                      <h5>Pending: {cardData.totalServiceSuppliersRequest.pending}</h5>
                      <h5>Rejected: {cardData.totalServiceSuppliersRequest.rejected}</h5>
                  </Card>
              </Col>
              <Col sm={6} md={3}>
                  <Card className="card-div-fluid py-2 px-4">
                      <h4>Complaints</h4>
                      <h5>Unread: {cardData.totalMessages.unread}</h5>
                      <h5>Read: {cardData.totalMessages.read}</h5>
                  </Card>
              </Col>


              <Col className="py-4 py-md-5" sm={6}>
                  <h2>Service Supplier Count</h2>
                  <Table striped bordered hover size="sm">
                      <thead>
                      <tr>
                          <th className="text-center">Province</th>
                          <th className="text-center">All S.S. Count</th>
                          <th className="text-center">New S.S. Count</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          cities.map(element =>
                            <tr>
                                <td className="ps-3">{element}</td>
                                <td className="text-center">40</td>
                                <td className="text-center">18</td>
                            </tr>
                          )
                      }
                      </tbody>
                  </Table>
              </Col>
              <Col className="py-4 py-md-5" sm={6}>
                  <h2>Service Posts</h2>
                  <Table striped bordered hover size="sm">
                      <thead>
                      <tr>
                          <th className="text-center">Service Type</th>
                          <th className="text-center">All Post Count</th>
                          <th className="text-center">New Post Count</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          serviceTypes.map(element =>
                            <tr>
                                <td className="ps-3"><span className={element.icon}/> {element.label}</td>
                                <td className="text-center">40</td>
                                <td className="text-center">18</td>
                            </tr>
                          )
                      }
                      </tbody>
                  </Table>
              </Col>

              <Col className="py-4 py-md-5" sm={6}>
                  <h2>Daily Visit Count</h2>
                  <Line options={options} data={dataDailyVisitCount}/>
              </Col>

              <Col className="py-4 py-md-5" sm={6}>
                  <h2>Monthly Visit Count</h2>
                  <Line options={options} data={dataMonthlyVisitCount}/>
              </Col>

              <Col className="py-4 py-md-5" sm={12}>
                  <h2>Monthly Income Distribution</h2>
                  <Bar options={options} data={dataMonthlyIncomeDistribution}/>
              </Col>

              <Col className="py-4 py-md-5" sm={6}>
                  <h2>Province Vice Supplier Deviation</h2>
                  <Pie data={dataProvinceViceSupplierDeviation}/>
              </Col>

              <Col className="py-4 py-md-5" sm={6}>
                  <h2 className="text-center">Total Visitor Deviation</h2>
                  <Pie data={visitorDeviation}/>
              </Col>

          </Row>
      </Container>
    )
}
export default Dashboard;
