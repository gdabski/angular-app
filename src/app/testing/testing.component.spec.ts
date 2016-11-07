import { TestBed, async } from '@angular/core/testing';
import { TestingComponent } from './testing.component';
import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';

describe('Component: Testing', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestingComponent],
            imports: [],
            providers: [
                { provide: 'testingDependency', useValue: 'test' },
                { provide: 'http',
                    useFactory: (backend: ConnectionBackend, options) => {
                        return new Http(backend, options)
                    }, deps: [BaseRequestOptions]
                }]
        })
    });

    it('should create an instance', () => {
        let fixture = TestBed.createComponent(TestingComponent)
        let component = fixture.componentInstance
        expect(component).toBeTruthy();
    });

    it('should add numbers', () => {
        let fixture = TestBed.createComponent(TestingComponent)
        let component = fixture.componentInstance
        expect(component.addNumbers(1, 2)).toEqual(3)
    });

    it('should render title', () => {
        let fixture = TestBed.createComponent(TestingComponent)
        let component = fixture.componentInstance
        let element = fixture.debugElement.nativeElement
        component.title = 'Banana!'
        fixture.detectChanges(true)
        expect(element.querySelector('p').textContent).toEqual('Banana!')
    });

})
