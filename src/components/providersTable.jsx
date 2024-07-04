import ProviderEntry from "./providerEntry";

const providers = [
    {name:"prov1",email:"prov1@mail.com"},    
    {name:"prov2",email:"prov2@mail.com"},
    {name:"prov3",email:"prov3@mail.com"},
    {name:"prov4",email:"prov4@mail.com"}
];
export default function ProvidersTable (){
    return (
        <table className="providers-table">
            <thead>
                <tr>
                    <th>Provider Name</th>
                    <th>E-mail</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {providers.map((provider, index) => <ProviderEntry key={index} ProviderName={provider.name} ProviderEmail={provider.email}></ProviderEntry>)}
                <tr>
                    <td></td>
                    <td>Year: 2014</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}