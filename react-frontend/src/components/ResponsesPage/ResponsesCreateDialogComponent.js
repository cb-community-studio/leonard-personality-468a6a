import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

const ispersuasiveOptions = [1,2,3,4,5].map((x,i) => ({ label: x, value: i }));
const isarisktakerOptions = [1,2,3,4,5].map((x,i) => ({ label: x, value: i }));
const valuesbeingappreciatedbyothersOptions = [1,2,3,4,5].map((x,i) => ({ label: x, value: i }));

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ResponsesCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    

    useEffect(() => {
        set_entity({});
    }, [props.show]);
    const onSave = async () => {
        let _data = {
            Age: _entity.Age,
            Email: _entity.Email,
            Name: _entity.Name,
            Organization: _entity.Organization,
            Jobdescription: _entity.Jobdescription,
            ispersuasive: _entity.ispersuasive,
            isarisktaker: _entity.isarisktaker,
            valuesbeingappreciatedbyothers: _entity.valuesbeingappreciatedbyothers,
            likestodothingsinawayacceptabletoothers: _entity.likestodothingsinawayacceptabletoothers,
            enjoysbeinginventive: _entity.enjoysbeinginventive,
            triestobeplayful: _entity.triestobeplayful,
            enjoystalkingwithothers: _entity.enjoystalkingwithothers,
            desirestobeincontrol: _entity.desirestobeincontrol,
            isagoodlistener: _entity.isagoodlistener,
            haslotsofenergyandenthusiasm: _entity.haslotsofenergyandenthusiasm,
            iscurious: _entity.iscurious,
            thinkscarefullybeforemakingadecision: _entity.thinkscarefullybeforemakingadecision,
            requiresarelaxedfriendlyatmospheretoworkbes: _entity.requiresarelaxedfriendlyatmospheretoworkbes,
            makesfriendscautiously: _entity.makesfriendscautiously,
            desiresquickresults: _entity.desiresquickresults,
            doesnotstandnonsensefromothers: _entity.doesnotstandnonsensefromothers,
            likestowin: _entity.likestowin,
            isafunpersontobewith: _entity.isafunpersontobewith,
            isaconscientiousperson: _entity.isaconscientiousperson,
            ischeerful: _entity.ischeerful,
            likesmoderation: _entity.likesmoderation,
            isthelifeofaparty: _entity.isthelifeofaparty,
            trieshardtobediligent: _entity.trieshardtobediligent,
            hasastrongsenseofduty: _entity.hasastrongsenseofduty,
            likestotryoriginalapproaches: _entity.likestotryoriginalapproaches,
            issupportiveofothers: _entity.issupportiveofothers,
        };

        setLoading(true);
        try {
            const result = await client.service("responses").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };
    

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="responses-create-dialog-component">
            <div>
                <p className="m-0">Age:</p>
                <InputText className="w-full mb-3" value={_entity?.Age} onChange={(e) => setValByKey("Age", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Email:</p>
                <InputText className="w-full mb-3" value={_entity?.Email} onChange={(e) => setValByKey("Email", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Name:</p>
                <InputText className="w-full mb-3" value={_entity?.Name} onChange={(e) => setValByKey("Name", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Organization:</p>
                <InputText className="w-full mb-3" value={_entity?.Organization} onChange={(e) => setValByKey("Organization", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Job Description:</p>
                <InputText className="w-full mb-3" value={_entity?.Jobdescription} onChange={(e) => setValByKey("Jobdescription", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">ispersuasive:</p>
                <Dropdown value={_entity?.ispersuasive} options={ispersuasiveOptions} onChange={(e) => setValByKey("ispersuasive", e.value)} />
            </div>
            <div>
                <p className="m-0">isarisktaker:</p>
                <Dropdown value={_entity?.isarisktaker} options={isarisktakerOptions} onChange={(e) => setValByKey("isarisktaker", e.value)} />
            </div>
            <div>
                <p className="m-0">valuesbeingappreciatedbyothers:</p>
                <Dropdown value={_entity?.valuesbeingappreciatedbyothers} options={valuesbeingappreciatedbyothersOptions} onChange={(e) => setValByKey("valuesbeingappreciatedbyothers", e.value)} />
            </div>
            <div>
                <p className="m-0">likes to do things in a way acceptable to others:</p>
                <InputText className="w-full mb-3" value={_entity?.likestodothingsinawayacceptabletoothers} onChange={(e) => setValByKey("likestodothingsinawayacceptabletoothers", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">enjoys being inventive:</p>
                <InputText className="w-full mb-3" value={_entity?.enjoysbeinginventive} onChange={(e) => setValByKey("enjoysbeinginventive", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">tries to be playful:</p>
                <InputText className="w-full mb-3" value={_entity?.triestobeplayful} onChange={(e) => setValByKey("triestobeplayful", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">enjoys talking with others:</p>
                <InputText className="w-full mb-3" value={_entity?.enjoystalkingwithothers} onChange={(e) => setValByKey("enjoystalkingwithothers", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">desires to be in control:</p>
                <InputText className="w-full mb-3" value={_entity?.desirestobeincontrol} onChange={(e) => setValByKey("desirestobeincontrol", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is a good listener:</p>
                <InputText className="w-full mb-3" value={_entity?.isagoodlistener} onChange={(e) => setValByKey("isagoodlistener", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">has lots of energy and enthusiasm:</p>
                <InputText className="w-full mb-3" value={_entity?.haslotsofenergyandenthusiasm} onChange={(e) => setValByKey("haslotsofenergyandenthusiasm", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is curious:</p>
                <InputText className="w-full mb-3" value={_entity?.iscurious} onChange={(e) => setValByKey("iscurious", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">thinks carefully before making a decision:</p>
                <InputText className="w-full mb-3" value={_entity?.thinkscarefullybeforemakingadecision} onChange={(e) => setValByKey("thinkscarefullybeforemakingadecision", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">requires a relaxed friendly atmosphere to work best:</p>
                <InputText className="w-full mb-3" value={_entity?.requiresarelaxedfriendlyatmospheretoworkbes} onChange={(e) => setValByKey("requiresarelaxedfriendlyatmospheretoworkbes", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">makes friends cautiously:</p>
                <InputText className="w-full mb-3" value={_entity?.makesfriendscautiously} onChange={(e) => setValByKey("makesfriendscautiously", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">desires quick results:</p>
                <InputText className="w-full mb-3" value={_entity?.desiresquickresults} onChange={(e) => setValByKey("desiresquickresults", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">does not stand nonsense from others:</p>
                <InputText className="w-full mb-3" value={_entity?.doesnotstandnonsensefromothers} onChange={(e) => setValByKey("doesnotstandnonsensefromothers", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">likes to win:</p>
                <InputText className="w-full mb-3" value={_entity?.likestowin} onChange={(e) => setValByKey("likestowin", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is a fun person to be with:</p>
                <InputText className="w-full mb-3" value={_entity?.isafunpersontobewith} onChange={(e) => setValByKey("isafunpersontobewith", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is a conscientious person:</p>
                <InputText className="w-full mb-3" value={_entity?.isaconscientiousperson} onChange={(e) => setValByKey("isaconscientiousperson", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is cheerful:</p>
                <InputText className="w-full mb-3" value={_entity?.ischeerful} onChange={(e) => setValByKey("ischeerful", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">likes moderation:</p>
                <InputText className="w-full mb-3" value={_entity?.likesmoderation} onChange={(e) => setValByKey("likesmoderation", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is the life of a party:</p>
                <InputText className="w-full mb-3" value={_entity?.isthelifeofaparty} onChange={(e) => setValByKey("isthelifeofaparty", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">tries hard to be diligent:</p>
                <InputText className="w-full mb-3" value={_entity?.trieshardtobediligent} onChange={(e) => setValByKey("trieshardtobediligent", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">has a strong sense of duty:</p>
                <InputText className="w-full mb-3" value={_entity?.hasastrongsenseofduty} onChange={(e) => setValByKey("hasastrongsenseofduty", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">likes to try original approaches:</p>
                <InputText className="w-full mb-3" value={_entity?.likestotryoriginalapproaches} onChange={(e) => setValByKey("likestotryoriginalapproaches", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">is supportive of others:</p>
                <InputText className="w-full mb-3" value={_entity?.issupportiveofothers} onChange={(e) => setValByKey("issupportiveofothers", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(ResponsesCreateDialogComponent);
