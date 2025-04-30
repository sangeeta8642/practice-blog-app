import { Pipe, PipeTransform } from '@angular/core';
import { userInterface } from '../utils/type.interface';

@Pipe({
    name: 'adminName'
})
export class AdminNamePipe implements PipeTransform {

    transform(adminId: number, admins: userInterface[]): string {
        const admin = admins.find(a => a.id === adminId);
        return admin ? admin.name : 'Unknown Admin';
    }

}
