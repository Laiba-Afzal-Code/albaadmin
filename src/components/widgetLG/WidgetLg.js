import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };
  return (
    <>
      <div className="WidgetLg">
        <span className="widgetLgTitle">Latest Transactions</span>
        <table className="widgetTable">
          <tr className="widgtTr">
            <th className="widgetTh">Customer</th>
            <th className="widgetTh">Date</th>
            <th className="widgetTh">Amount</th>
            <th className="widgetTh">Status</th>
          </tr>
          <tr className="widgetTr">
            <td className="widgetUser">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
                className="tableImg"
              />
              <span className="widgetLgName">Fiza Khan</span>
            </td>
            <td className="widgetDate">2 Jun 2024</td>
            <td className="widgetAmount">$225.99</td>
            <td className="widgetStatus">
              <Button type={"Approved"} />
            </td>
          </tr>

          <tr className="widgetTr">
            <td className="widgetUser">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
                className="tableImg"
              />
              <span className="widgetLgName">Maria Khan</span>
            </td>
            <td className="widgetDate">2 Jun 2024</td>
            <td className="widgetAmount">$225.99</td>
            <td className="widgetStatus">
              <Button type="Declined" />
            </td>
          </tr>

          <tr className="widgetTr">
            <td className="widgetUser">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
                className="tableImg"
              />
              <span className="widgetLgName">Amina Khan</span>
            </td>
            <td className="widgetDate">2 Jun 2024</td>
            <td className="widgetAmount">$225.99</td>
            <td className="widgetStatus">
              <Button type={"Panding"} />
            </td>
          </tr>

          <tr className="widgetTr">
            <td className="widgetUser">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="user"
                className="tableImg"
              />
              <span className="widgetLgName">Aysha Khan</span>
            </td>
            <td className="widgetDate">2 Jun 2024</td>
            <td className="widgetAmount">$225.99</td>
            <td className="widgetStatus">
              <Button type={"Approved"} />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
