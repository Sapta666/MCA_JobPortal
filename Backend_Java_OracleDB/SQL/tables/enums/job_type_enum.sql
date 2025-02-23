create table job_type_enum (
    job_type_id varchar2(32),
    job_type varchar2(32),
    constraint pk_#job_type_enum_$job_type_id primary key(job_type_id)
);

desc job_type_enum;

select * from job_type_enum;

insert into job_type_enum values('jobType001','Architecture');
insert into job_type_enum values('jobType002','Arts');
insert into job_type_enum values('jobType003','Agriculture');
insert into job_type_enum values('jobType004','Business');
insert into job_type_enum values('jobType005','Education');
insert into job_type_enum values('jobType006','Medical');
insert into job_type_enum values('jobType007','Information Technology');