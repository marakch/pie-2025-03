clear
clear s
freeports = serialportlist("available")
x = freeports
%connect to serial port
port = "/dev/cu.usbserial-0001";
baudrate = 115200;
s = serialport(port,baudrate);
tNow = [];
rawA = [];
radA = [];
throttleIN = [];
pitchCTRL = [];
rollCTRL = [];
throttleOUT = [];
flush(s);
%initialize a timeout in case MATLAB cannot connect to the arduino
timeout = 0;
% main loop to read data from the Arduino, then display it%
while timeout < 5 % % check if data was received %
disp("in loop")
while s.NumBytesAvailable > 0
timeout = 0;
% Read the ASCII data from the serialport object.
string = split(readline(s), ", ");

tNow(end+1) = str2double(string(1));
rawA(end+1) = str2double(string(2));
radA(end+1) = str2double(string(3));
throttleIN(end+1) = str2double(string(4));
pitchCTRL(end+1) = str2double(string(5));
rollCTRL(end+1) = str2double(string(6));
throttleOUT(end+1) = str2double(string(7));
end
pause(1);
timeout = timeout + 1;
end
%plot unprocessed data as a 3d rotatable plot
figure();
plot(s1(132:end));
hold on
plot(s2(132:end));
plot(s3(132:end));
plot(s4(132:end));
legend("Sensor 1","Sensor 2", "Sensor 3", "Sensor 4")
xlabel("Time Ticks")
ylabel("Sensor Reading")
title("Sensor Readings for Line Following")
hold off
figure();
plot(l(132:end));
hold on
plot(r(132:end));
legend("Left Wheel Reading", "Right Wheel Reading")
xlabel("Time Ticks")
ylabel("Commanded Wheel Speed")
%plot unprocessed data as a 3d rotatable plot
figure();
yyaxis left
h1 = plot(s1(132:end));
hold on
h2 = plot(s4(132:end));
legend("Sensor 1","Sensor 2", "Sensor 3", "Sensor 4")
xlabel("Time Ticks")
ylabel("Sensor Reading")
yyaxis right
h3 = plot(l(132:end));
hold on
h4 = plot(r(132:end));
legend([h1,h2,h3,h4],{"Sensor 1", "Sensor 2", "Left Wheel Reading", "Right Wheel Reading"},'Location', 'southoutside')
ylabel("Commanded Wheel Speed")
