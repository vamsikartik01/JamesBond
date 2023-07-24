export class ControlPanelService {
    private currentDevices: {'name': string,'type':string,'status':boolean}[] = [
        {'name':'Tube Light','type':'light','status':false},
        {'name':'Ceiling Light - 1','type':'light','status':false},
        {'name':'Bed Fan','type':'fan','status':false},
        {'name':'table fan','type':'fan','status':true},
        {'name':'Ceiling light 2','type':'light','status':false},
        {'name':'Ac','type':'ac','status':false},
        {'name':'speakers','type':'sound','status':false},
        {'name':'Tv','type':'tv','status':false}
    ];

    private roomOne: {'name': string,'type':string,'status':boolean}[] = [
        {'name':'Tube Light 1','type':'light','status':false},
        {'name':'Ceiling Light - 1','type':'light','status':false},
        {'name':'Bed Fan','type':'fan','status':false},
        {'name':'table fan','type':'fan','status':true},
        {'name':'Ceiling light 2','type':'light','status':false},
        {'name':'Ac','type':'ac','status':false},
        {'name':'speakers','type':'sound','status':false},
        {'name':'Tv','type':'tv','status':false}
    ];

    private roomTwo: {'name': string,'type':string,'status':boolean}[] = [
        {'name':'Tube Light 2','type':'light','status':false},
        {'name':'Ceiling Light - 1','type':'light','status':false},
        {'name':'Bed Fan','type':'fan','status':false},
        {'name':'table fan','type':'fan','status':true},
        {'name':'Ceiling light 2','type':'light','status':false},
        {'name':'Ac','type':'ac','status':false},
        {'name':'speakers','type':'sound','status':false},
        {'name':'Tv','type':'tv','status':false}
    ];

    getCurrentDevices(id: string) {
        if (id==='1'){
            return this.roomOne.slice()
        } else if(id==='2'){
            return this.roomTwo.slice()
        }else{
            return this.currentDevices.slice()
        }   
    }
}