import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleResponsesPage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("responses")
            .get(urlParams.singleResponsesId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Responses", type: "error", message: error.message || "Failed get responses" });
            });
    }, []);

    const goBack = () => {
        history.replace("/responses");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Responses</h3>
                </div>
                <p>responses/{urlParams.singleResponsesId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Age</label>
                    <p className="m-0" >{data?.Age}</p>
                    <label className="text-sm">Email</label>
                    <p className="m-0" >{data?.Email}</p>
                    <label className="text-sm">Name</label>
                    <p className="m-0" >{data?.Name}</p>
                    <label className="text-sm">Organization</label>
                    <p className="m-0" >{data?.Organization}</p>
                    <label className="text-sm">Job Description</label>
                    <p className="m-0" >{data?.Jobdescription}</p>
                    <label className="text-sm">likes to do things in a way acceptable to others</label>
                    <p className="m-0" >{data?.likestodothingsinawayacceptabletoothers}</p>
                    <label className="text-sm">enjoys being inventive</label>
                    <p className="m-0" >{data?.enjoysbeinginventive}</p>
                    <label className="text-sm">tries to be playful</label>
                    <p className="m-0" >{data?.triestobeplayful}</p>
                    <label className="text-sm">enjoys talking with others</label>
                    <p className="m-0" >{data?.enjoystalkingwithothers}</p>
                    <label className="text-sm">desires to be in control</label>
                    <p className="m-0" >{data?.desirestobeincontrol}</p>
                    <label className="text-sm">is a good listener</label>
                    <p className="m-0" >{data?.isagoodlistener}</p>
                    <label className="text-sm">has lots of energy and enthusiasm</label>
                    <p className="m-0" >{data?.haslotsofenergyandenthusiasm}</p>
                    <label className="text-sm">is curious</label>
                    <p className="m-0" >{data?.iscurious}</p>
                    <label className="text-sm">thinks carefully before making a decision</label>
                    <p className="m-0" >{data?.thinkscarefullybeforemakingadecision}</p>
                    <label className="text-sm">requires a relaxed friendly atmosphere to work best</label>
                    <p className="m-0" >{data?.requiresarelaxedfriendlyatmospheretoworkbes}</p>
                    <label className="text-sm">makes friends cautiously</label>
                    <p className="m-0" >{data?.makesfriendscautiously}</p>
                    <label className="text-sm">desires quick results</label>
                    <p className="m-0" >{data?.desiresquickresults}</p>
                    <label className="text-sm">does not stand nonsense from others</label>
                    <p className="m-0" >{data?.doesnotstandnonsensefromothers}</p>
                    <label className="text-sm">likes to win</label>
                    <p className="m-0" >{data?.likestowin}</p>
                    <label className="text-sm">is a fun person to be with</label>
                    <p className="m-0" >{data?.isafunpersontobewith}</p>
                    <label className="text-sm">is a conscientious person</label>
                    <p className="m-0" >{data?.isaconscientiousperson}</p>
                    <label className="text-sm">is cheerful</label>
                    <p className="m-0" >{data?.ischeerful}</p>
                    <label className="text-sm">likes moderation</label>
                    <p className="m-0" >{data?.likesmoderation}</p>
                    <label className="text-sm">is the life of a party</label>
                    <p className="m-0" >{data?.isthelifeofaparty}</p>
                    <label className="text-sm">tries hard to be diligent</label>
                    <p className="m-0" >{data?.trieshardtobediligent}</p>
                    <label className="text-sm">has a strong sense of duty</label>
                    <p className="m-0" >{data?.hasastrongsenseofduty}</p>
                    <label className="text-sm">likes to try original approaches</label>
                    <p className="m-0" >{data?.likestotryoriginalapproaches}</p>
                    <label className="text-sm">is supportive of others</label>
                    <p className="m-0" >{data?.issupportiveofothers}</p>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleResponsesPage);
