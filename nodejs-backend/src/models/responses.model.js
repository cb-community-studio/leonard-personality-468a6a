// See http://mongoosejs.com/docs/models.html
    // for more of what you can do here.
    module.exports = function (app) {
        const modelName = 'responses';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          // ~cb-read-start~
          {
                   Age: { type: String, required: true },
       Email: { type: String, required: true, unique: true },
       Name: { type: String, required: true, unique: true },
       Organization: { type: String, required: true },
       Jobdescription: { type: String, required: true },
       ispersuasive: { type: Array, required: true, default: [1,2,3,4,5] },
       isarisktaker: { type: Array, default: [1,2,3,4,5] },
       valuesbeingappreciatedbyothers: { type: Array, default: [1,2,3,4,5] },
       likestodothingsinawayacceptabletoothers: { type: String, required: true },
       enjoysbeinginventive: { type: String, required: true },
       triestobeplayful: { type: String, required: true },
       enjoystalkingwithothers: { type: String, required: true },
       desirestobeincontrol: { type: String, required: true },
       isagoodlistener: { type: String, required: true },
       haslotsofenergyandenthusiasm: { type: String, required: true },
       iscurious: { type: String, required: true },
       thinkscarefullybeforemakingadecision: { type: String, required: true },
       requiresarelaxedfriendlyatmospheretoworkbes: { type: String, required: true },
       makesfriendscautiously: { type: String, required: true },
       desiresquickresults: { type: String, required: true },
       doesnotstandnonsensefromothers: { type: String, required: true },
       likestowin: { type: String, required: true },
       isafunpersontobewith: { type: String, required: true },
       isaconscientiousperson: { type: String, required: true },
       ischeerful: { type: String, required: true },
       likesmoderation: { type: String, required: true },
       isthelifeofaparty: { type: String, required: true },
       trieshardtobediligent: { type: String, required: true },
       hasastrongsenseofduty: { type: String, required: true },
       likestotryoriginalapproaches: { type: String, required: true },
       issupportiveofothers: { type: String, required: true },

            // ~cb-relationship-schema~
          },
          // ~cb-read-end~
          {
          timestamps: true
        });
      
        // This is necessary to avoid model compilation errors in watch mode
        // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };