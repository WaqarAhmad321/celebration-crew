#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <iomanip>
using namespace std;

// Structure to store student data
struct Student {
    string name;
    int id;
    float gpa;
    int attendance;
    vector<string> courses;
    vector<float> grades;
    string password;
};

// Function prototypes
void addStudent(vector<Student>& students);
void displayAllStudents(const vector<Student>& students);
int login(const vector<Student>& students, int id, const string& password);
void updateAttendance(vector<Student>& students, int id);
void calculateGPA(const Student& student);
void enrollInCourse(Student& student);
void saveDataToFile(const vector<Student>& students, const string& filename);
void loadDataFromFile(vector<Student>& students, const string& filename);
void displayMenu();

// Main Function
int main() {
    vector<Student> students;
    string dataFile = "students_data.txt";

    // Load existing data
    loadDataFromFile(students, dataFile);

    int choice;
    do {
        displayMenu();
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                addStudent(students);
                break;
            case 2:
                displayAllStudents(students);
                break;
            case 3: {
                int id;
                string password;
                cout << "Enter ID: ";
                cin >> id;
                cout << "Enter password: ";
                cin >> password;
                int index = login(students, id, password);
                if (index != -1) {
                    cout << "Login successful for " << students[index].name << endl;
                } else {
                    cout << "Invalid credentials." << endl;
                }
                break;
            }
            case 4: {
                int id;
                cout << "Enter ID to update attendance: ";
                cin >> id;
                updateAttendance(students, id);
                break;
            }
            case 5: {
                int id;
                cout << "Enter ID to calculate GPA: ";
                cin >> id;
                for (const auto& student : students) {
                    if (student.id == id) {
                        calculateGPA(student);
                        break;
                    }
                }
                break;
            }
            case 6:
                saveDataToFile(students, dataFile);
                break;
            case 0:
                saveDataToFile(students, dataFile);
                cout << "Exiting program." << endl;
                break;
            default:
                cout << "Invalid choice. Try again." << endl;
        }
    } while (choice != 0);

    return 0;
}

// Function Definitions

void addStudent(vector<Student>& students) {
    Student s;
    cout << "Enter student name: ";
    cin.ignore();
    getline(cin, s.name);
    cout << "Enter student ID: ";
    cin >> s.id;
    cout << "Enter password: ";
    cin >> s.password;
    s.gpa = 0.0;
    s.attendance = 0;
    students.push_back(s);
    cout << "Student added successfully!" << endl;
}

void displayAllStudents(const vector<Student>& students) {
    cout << setw(15) << "Name" << setw(10) << "ID" << setw(10) << "GPA" << setw(15) << "Attendance" << endl;
    cout << string(50, '-') << endl;
    for (const auto& s : students) {
        cout << setw(15) << s.name
             << setw(10) << s.id
             << setw(10) << s.gpa
             << setw(15) << s.attendance << endl;
    }
}

int login(const vector<Student>& students, int id, const string& password) {
    for (size_t i = 0; i < students.size(); i++) {
        if (students[i].id == id && students[i].password == password) {
            return i;
        }
    }
    return -1;
}

void updateAttendance(vector<Student>& students, int id) {
    for (auto& student : students) {
        if (student.id == id) {
            student.attendance++;
            cout << "Attendance updated for " << student.name << endl;
            return;
        }
    }
    cout << "Student ID not found." << endl;
}

void calculateGPA(const Student& student) {
    if (student.grades.empty()) {
        cout << "No grades available for GPA calculation." << endl;
        return;
    }
    float total = 0;
    for (float grade : student.grades) {
        total += grade;
    }
    float gpa = total / student.grades.size();
    cout << "GPA of " << student.name << ": " << fixed << setprecision(2) << gpa << endl;
}

void enrollInCourse(Student& student) {
    string course;
    cout << "Enter course name to enroll: ";
    cin.ignore();
    getline(cin, course);
    student.courses.push_back(course);
    cout << "Enrolled in course: " << course << endl;
}

void saveDataToFile(const vector<Student>& students, const string& filename) {
    ofstream outFile(filename);
    for (const auto& s : students) {
        outFile << s.name << ',' << s.id << ',' << s.gpa << ',' << s.attendance << ',' << s.password << '\n';
        for (const auto& course : s.courses) {
            outFile << course << ' ';
        }
        outFile << '\n';
    }
    outFile.close();
    cout << "Data saved to file." << endl;
}

void loadDataFromFile(vector<Student>& students, const string& filename) {
    ifstream inFile(filename);
    if (!inFile.is_open()) {
        return;
    }
    while (!inFile.eof()) {
        Student s;
        getline(inFile, s.name, ',');
        if (s.name.empty()) break;
        inFile >> s.id >> s.gpa >> s.attendance;
        inFile.ignore();
        getline(inFile, s.password, '\n');
        students.push_back(s);
    }
    inFile.close();
}

void displayMenu() {
    cout << "\n--- Student Portal Menu ---\n";
    cout << "1. Add Student\n";
    cout << "2. Display All Students\n";
    cout << "3. Login\n";
    cout << "4. Update Attendance\n";
    cout << "5. Calculate GPA\n";
    cout << "6. Save Data\n";
    cout << "0. Exit\n";
}
    