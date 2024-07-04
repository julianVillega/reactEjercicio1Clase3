export default function ProviderEntry({ProviderName, ProviderEmail}){
    return(
        <tr className="provider-entry">
            <td>{ProviderName}</td>
            <td>{ProviderEmail}</td>
            <td className="select-td"> <button onClick={()=>alert(ProviderEmail)}>Select</button> </td>
        </tr>
    );
}